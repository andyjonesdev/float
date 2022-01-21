from app.models import db, Song

def seed_songs():
    # copy for new Songs
    #  = Song(
    #     user_id=,
    #     title="",
    #     image="",
    #     audio="",
    #     description="",
    # )


    sativa = Song(
        user_id=2,
        title="Sativa (feat. Rae Sremmurd)",
        image="https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3",
    )

    good_days = Song(
        user_id=3,
        title="Good Days",
        image="https://cdn.discordapp.com/attachments/858135958729392152/933901177672826890/SZA_-_Good_Days.png",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/933901204503806012/SZA_-_Good_Days_Audio.mp3",
    )

    while_were_young = Song(
        user_id=2,
        title="While We're Young",
        image="https://i1.sndcdn.com/artworks-bI4tDrEz7QKu-0-t500x500.jpg",
        description="",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/933909876181200977/Jhene_Aiko_-_While_Were_Young_Prod._by_Fisticuffs.mp3",
    )

    db.session.add(sativa)
    db.session.add(good_days)
    db.session.add(while_were_young)

    db.session.commit()

def undo_songs():
    db.session.execute("TRUNCATE songs RESTART IDENTITY CASCADE;")
    db.session.commit()