from sqlalchemy import PrimaryKeyConstraint
from sqlalchemy.sql import func

from .db import db

class Song(db.Model):
    __tablename__ = "songs"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    audio = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())

    # later "comments" relationship
    # comments = db.relationship(
    #    'Comment', back_populates='song', cascade='all, delete')
    user = db.relationship(
       'User', back_populates='songs')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'title': self.title,
            'image': self.image,
            'description': self.description,
            'audio': self.audio,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'artist': self.user.to_dict(),
        }
