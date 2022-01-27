from app.models import db, User
from PIL import Image


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    jhene = User(
        username="Jhené Aiko", email='jheneaiko@aa.io', password='password',
        image="https://cdn.discordapp.com/attachments/858135958729392152/934970689419640882/unknown.png"
        )
    sza = User(
        username="SZA", email='sza@aa.io', password='password')
    fka = User(
        username="FKA twigs", email='fkatwigs@aa.io', password='password',
        image="https://cdn.discordapp.com/attachments/858135958729392152/935957779674460230/fkatwigs.PNG")


    db.session.add(demo)
    db.session.add(jhene)
    db.session.add(sza)
    db.session.add(fka)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
