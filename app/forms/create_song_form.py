# import later for validating img urls
# import requests
from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired, InputRequired, ValidationError

from app.models.song import Song

# for testing
# def cant_be_aaaaa(form, field):
#     if field.data == "aaaaa":
#         raise ValidationError("Value cannot be aaaaa")

# basic validators for new Songs
# TODO: implement more robust Song validation
class CreateSongForm(FlaskForm):
    title = StringField(validators=[DataRequired()])
    description = StringField(validators=[])
    image = StringField(validators=[DataRequired()])
    audio = StringField(validators=[DataRequired()])