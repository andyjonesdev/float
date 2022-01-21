from flask import Blueprint, request
from flask_login import current_user, login_required
from sqlalchemy import desc
from app.models import User, Song, db
from app.forms import validation_errors_to_error_messages_dict, CreateSongForm

song_routes = Blueprint('songs', __name__)

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
        songDict["artist"] = songDict["artist"]["username"]
        return songDict, 201
    return {"errors": validation_errors_to_error_messages_dict(form.errors)}, 400


@song_routes.route("/new")
def new_songs():
    new_songs = Song.query.order_by(
        desc(Song.created_at)).limit(12).all()

    new_songs_list = []
    for song in new_songs:
        songDict = song.to_dict()
        songDict["artist"] = songDict["artist"]["username"]
        new_songs_list.append(songDict)


    return { "new": new_songs_list }
