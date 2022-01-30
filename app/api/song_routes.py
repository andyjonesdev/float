from flask import Blueprint, request, abort
from flask_login import current_user, login_required
from sqlalchemy import desc
from app.models import User, Song, Comment, db
from app.forms import validation_errors_to_error_messages_dict, CreateSongForm

song_routes = Blueprint('songs', __name__)

# GET /api/songs/:songId/
@song_routes.route("/<int:song_id>")
def get_a_song(song_id):
    song = Song.query.get(song_id)

    if not song:
        return abort(404)

    songDict = song.to_dict()
    songDict["artist"], songDict["artistImage"] = songDict["artist"]["username"], songDict["artist"]["image"]
    return songDict, 201

# GET /api/songs/:songId/comments/
@song_routes.route("/<int:song_id>/comments")
def get_song_comments(song_id):
    comments = Comment.query.filter_by(song_id=song_id).all()

    comment_dict = {}
    for comment in comments:
        comment_dict[comment.id] = comment.to_dict()

    return comment_dict, 201

# PUT /api/songs/:songId/
@song_routes.route("/<int:song_id>", methods=["PUT"])
@login_required
def update_song(song_id):
    new_song_info = request.json
    form = CreateSongForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        song = Song.query.get(song_id)

        if song.user_id != current_user.id:
            return abort(403, description="Unauthorized deletion")

        for k, v in new_song_info.items():
            setattr(song, k, v)

        db.session.commit()
        songDict = song.to_dict()
        songDict["artist"], songDict["artistImage"] = songDict["artist"]["username"], songDict["artist"]["image"]
        return songDict, 201
    return {"errors": validation_errors_to_error_messages_dict(form.errors)}, 400

# POST /api/songs/
@song_routes.route("/", methods=["POST"])
@login_required
def create_song():
    form = CreateSongForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        song = Song(
            user_id=current_user.id,
            title=form.data["title"],
            image=form.data["image"],
            description=form.data["description"],
            audio=form.data["audio"],
        )
        db.session.add(song)
        db.session.commit()
        songDict = song.to_dict()
        songDict["artist"], songDict["artistImage"] = songDict["artist"]["username"], songDict["artist"]["image"]
        return songDict, 201
    return {"errors": validation_errors_to_error_messages_dict(form.errors)}, 400

# DELETE /api/songs/:songId/
@song_routes.route("/<int:song_id>", methods=["DELETE"])
@login_required
def delete_song(song_id):
    song = Song.query.get(song_id)
    send_song_id = song_id

    if song.user_id != current_user.id:
        return abort(403, description="Unauthorized deletion")

    db.session.delete(song)
    db.session.commit()
    return {"songId": send_song_id, "message": "Success"}

# GET /api/songs/new/
@song_routes.route("/new")
def new_songs():
    new_songs = Song.query.order_by(
        desc(Song.created_at)).limit(12).all()

    new_songs_list = []
    for song in new_songs:
        songDict = song.to_dict()
        songDict["artist"], songDict["artistImage"] = songDict["artist"]["username"], songDict["artist"]["image"]
        new_songs_list.append(songDict)


    return { "new": new_songs_list }
