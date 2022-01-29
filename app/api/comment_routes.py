from flask import Blueprint, request
from flask_login import current_user, login_required
from sqlalchemy import desc
from app.models import User, Song, Comment, db
from app.forms import validation_errors_to_error_messages_dict, CreateCommentForm

comment_routes = Blueprint('comments', __name__)

# POST /api/comments/
@comment_routes.route("/", methods=["POST"])
@login_required
def create_comment():
    form = CreateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            user_id=current_user.id,
            song_id=form.data["songId"],
            content=form.data["content"],
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict(), 201
    return {"errors": validation_errors_to_error_messages_dict(form.errors)}, 400
