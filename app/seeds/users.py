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
        username="SZA", email='sza@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937560624987250708/sza.PNG?width=341&height=343")
    fka = User(
        username="FKA twigs", email='fkatwigs@aa.io', password='password',
        image="https://cdn.discordapp.com/attachments/858135958729392152/935957779674460230/fkatwigs.PNG")
    porter = User(
        username="Porter Robinson", email='porterrobinson@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937554432038678550/porterrobinson.PNG?width=324&height=324")
    frank = User(
        username="Frank Ocean", email='frankocean@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937560361656270869/frankocean.PNG?width=341&height=343")
    kali = User(
        username="Kali Uchis", email='kaliuchis@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937561266782863431/unknown.png?width=342&height=342")
    mondo = User(
        username="Mondo Grosso", email='mondogrosso@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937563530243239986/unknown.png?width=344&height=343")
    alina = User(
        username="Alina Baraz", email='alinabaraz@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937567812300468294/unknown.png?width=342&height=342")
    niki = User(
        username="NIKI", email='niki@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937569283179958272/unknown.png?width=342&height=342")
    andy = User(
        username="Andy is vibing", email='andy@aa.io', password='password',
        image="https://media.discordapp.net/attachments/858135958729392152/937618906963652678/psyay.jpg?width=584&height=584")
    stephen = User(
        username="Stephen", email='stephen@aa.io', password='password',
        image="https://static.fandomspot.com/images/09/9010/05-younger-toguro-yu-yu-hakusho-anime.jpg")
    amala = User(
        username="Amala", email='amala@aa.io', password='password',
        image="https://imgix.bustle.com/nylon/18367737/origin.png?w=1200&h=1000&fit=crop&crop=faces&auto=format%2Ccompress")


    db.session.add(demo)
    db.session.add(jhene)
    db.session.add(sza)
    db.session.add(fka)
    db.session.add(porter)
    db.session.add(frank)
    db.session.add(kali)
    db.session.add(mondo)
    db.session.add(alina)
    db.session.add(niki)
    db.session.add(andy)
    db.session.add(stephen)
    db.session.add(amala)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
