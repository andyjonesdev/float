from app.models import db, Song

def seed_songs():
    # copy for new Songs
    #  = Song(
    #     user_id= ,
    #     title= ,
    #     image= ,
    #     description= ,
    #     audio= ,
    # )

    sativa = Song(
        user_id=4,
        title="Sativa (feat. Rae Sremmurd)",
        image="https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3",
    )

    db.session.add(sativa)

    db.session.commit()

def undo_songs():
    db.session.execute("TRUNCATE songs RESTART IDENTITY CASCADE;")
    db.session.commit()
