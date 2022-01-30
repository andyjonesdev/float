from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired, InputRequired, ValidationError

class EditCommentForm(FlaskForm):
    content = StringField(validators=[DataRequired()])
