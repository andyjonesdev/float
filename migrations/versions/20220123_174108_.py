"""empty message

Revision ID: af7536798d55
Revises: 58074cb7acda
Create Date: 2022-01-23 17:41:08.289270

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'af7536798d55'
down_revision = '58074cb7acda'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('image', sa.String(length=255), nullable=True))

    if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'image')
    # ### end Alembic commands ###
