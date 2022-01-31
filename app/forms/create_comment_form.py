from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired, ValidationError

def less_than_255(form, field):
    if len(field.data) >= 255:
        raise ValidationError("Comment cannot exceed 255 characters")

class CreateCommentForm(FlaskForm):
    content = StringField(validators=[DataRequired(), less_than_255])
    songId = IntegerField(validators=[DataRequired()])
