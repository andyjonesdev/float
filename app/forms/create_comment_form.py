from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired, InputRequired, ValidationError

from app.models.song import Song


class CreateCommentForm(FlaskForm):
    content = StringField(validators=[DataRequired()])
    songId = IntegerField(validators=[DataRequired()])
