from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from app.models import User
from app.forms import validation_errors_to_error_messages_dict

song_routes = Blueprint('songs', __name__)

# POST /api/songs/
@item_routes.route("/", methods=["POST"])
# @login_required
def create_item():
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
        return item.to_dict(), 201
    return {"errors": validation_errors_to_error_messages_dict(form.errors)}, 400
