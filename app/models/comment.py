from sqlalchemy.sql import func

from .db import db

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False)
    content = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())


    song = db.relationship(
       'Song', back_populates='comments')
    user = db.relationship(
       'User', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'songId': self.song_id,
            'content': self.content,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'userImage': self.user.image,
            'userName': self.user.username,
            'userId': self.user.id
        }
