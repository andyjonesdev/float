from flask import Blueprint, request, abort
from flask_login import current_user, login_required
from sqlalchemy import desc
from app.models import User, Song, Comment, db
from app.forms import validation_errors_to_error_messages_dict, CreateCommentForm, EditCommentForm

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


# DELETE /api/comments/:commentId/
@comment_routes.route("/<int:comment_id>", methods=["DELETE"])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    send_comment_id = comment_id

    if comment.user_id != current_user.id:
        return abort(403, description="Unauthorized deletion")

    db.session.delete(comment)
    db.session.commit()
    return {"commentId": send_comment_id, "message": "Success"}

# PUT /api/comments/:commentId
@comment_routes.route("/<int:comment_id>", methods=["PUT"])
@login_required
def update_comment(comment_id):
    new_comment_info = request.json
    print("NEW COMMENT INFO ---> ", new_comment_info)
    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment.query.get(comment_id)

        if comment.user_id != current_user.id:
            return abort(403, description="Unauthorized deletion")

        for k, v in new_comment_info.items():
            setattr(comment, k, v)

        db.session.commit()
        return comment.to_dict(), 201
    return {"errors": validation_errors_to_error_messages_dict(form.errors)}, 400
