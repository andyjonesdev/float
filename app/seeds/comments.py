from app.models import db, Comment

#user 11, 12, 13, 14

def seed_comments():
    c1 = Comment(
        user_id=11,
        song_id=1,
        content="love this song",
    )
    c2 = Comment(
        user_id=12,
        song_id=3,
        content="love this song",
    )
    c3 = Comment(
        user_id=13,
        song_id=5,
        content="love this song",
    )
    c4 = Comment(
        user_id=13,
        song_id=7,
        content="love this song!!",
    )
    c5 = Comment(
        user_id=13,
        song_id=9,
        content="love this song!!",
    )
    c6 = Comment(
        user_id=13,
        song_id=11,
        content="absolutely vibing B)",
    )
    c7 = Comment(
        user_id=12,
        song_id=2,
        content="absolutely vibing B)",
    )
    c8 = Comment(
        user_id=12,
        song_id=4,
        content="absolutely vibing B)",
    )
    c9 = Comment(
        user_id=12,
        song_id=6,
        content="absolutely vibing B)",
    )
    c10 = Comment(
        user_id=12,
        song_id=8,
        content="absolutely vibing B)",
    )
    c11 = Comment(
        user_id=12,
        song_id=10,
        content="absolutely vibing B)",
    )
    c12 = Comment(
        user_id=12,
        song_id=12,
        content="absolutely vibing B)",
    )
    after1 = Comment(
        user_id=11,
        song_id=10,
        content="~if you need a hero, just look in the mirror~",
    )
    after2 = Comment(
        user_id=13,
        song_id=10,
        content="let's goooooo",
    )
    sativa1 = Comment(
        user_id=13,
        song_id=1,
        content="🎵 spend cash for entertainment",
    )
    good1 = Comment(
        user_id=11,
        song_id=2,
        content="good day living in my mind!",
    )
    while1 = Comment(
        user_id=11,
        song_id=3,
        content="we chilling",
    )
    wind1 = Comment(
        user_id=11,
        song_id=4,
        content="I want to live in the forest now",
    )
    oh1 = Comment(
        user_id=11,
        song_id=5,
        content="y u playin baby boi whats up 🎵",
    )
    nights1 = Comment(
        user_id=11,
        song_id=6,
        content="this song will never get old",
    )
    broken1 = Comment(
        user_id=11,
        song_id=7,
        content="it's still love 🎵",
    )
    de1 = Comment(
        user_id=11,
        song_id=8,
        content="love kali :'), this album is fire",
    )
    labyrinth1 = Comment(
        user_id=11,
        song_id=9,
        content="my favorite song :)",
    )
    to1 = Comment(
        user_id=11,
        song_id=11,
        content="this song is a mantra for my mental health :)",
    )
    every1 = Comment(
        user_id=11,
        song_id=12,
        content="every day is summertime with you 🎵",
    )

    db.session.add(c1)
    db.session.add(c2)
    db.session.add(c3)
    db.session.add(c4)
    db.session.add(c5)
    db.session.add(c6)
    db.session.add(c7)
    db.session.add(c8)
    db.session.add(c9)
    db.session.add(c10)
    db.session.add(c11)
    db.session.add(c12)
    db.session.add(after1)
    db.session.add(after2)
    db.session.add(sativa1)
    db.session.add(good1)
    db.session.add(while1)
    db.session.add(wind1)
    db.session.add(oh1)
    db.session.add(nights1)
    db.session.add(broken1)
    db.session.add(de1)
    db.session.add(labyrinth1)
    db.session.add(to1)
    db.session.add(every1)

    db.session.commit()

def undo_comments():
    db.session.execute("TRUNCATE comments RESTART IDENTITY CASCADE;")
    db.session.commit()
