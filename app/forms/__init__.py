from .login_form import LoginForm
from .signup_form import SignUpForm
from .create_song_form import CreateSongForm
from .create_comment_form import CreateCommentForm

# credit to Justin Russo for below utility @justinrusso
def validation_errors_to_error_messages_dict(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a dict
    """
    errorMessages = dict()
    for field in validation_errors:
        errorMessages[field] = []
        for error in validation_errors[field]:
            errorMessages[field].append(f"{error}")
    return errorMessages
