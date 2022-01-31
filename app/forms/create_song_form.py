import requests
from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired, InputRequired, ValidationError

from app.models.song import Song

def valid_img_url(form, field):
    image_url = field.data

    image_formats = ("image/png", "image/jpeg", "image/jpg")
    r = requests.head(image_url)
    if r.headers["content-type"] not in image_formats:
      raise ValidationError('Must provide a valid image url')

def title_less_than_100(form, field):
    if len(field.data) >= 100:
        raise ValidationError("Title cannot exceed 100 characters")

def desc_less_than_255(form, field):
    if len(field.data) >= 255:
        raise ValidationError("Description cannot exceed 255 characters")

class CreateSongForm(FlaskForm):
    description = StringField(validators=[desc_less_than_255])
    audio = StringField(validators=[DataRequired()])
    image = StringField(validators=[DataRequired(), valid_img_url])
    title = StringField(validators=[DataRequired(), title_less_than_100])
