from app.models import db, Song

def seed_songs():
    sativa = Song(
        user_id=2,
        title="Sativa (feat. Swae Lee)",
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

    wind_tempos = Song(
        user_id=5,
        title="Wind Tempos",
        image="https://media.pitchfork.com/photos/6010f068751891e1b1b614e7/1:1/w_600/PorterRobinson%20Nurture%20album%20cover.jpg",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/936060475374985216/windtempos.mp3",
        description="my new album \"nurture\" is out now: porter.fm/nurture",
    )

    oh_my_love = Song(
        user_id=4,
        title="oh my love",
        image="https://media.discordapp.net/attachments/858135958729392152/935212441409847306/unknown.png?width=343&height=343",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/935209096234270750/FKA_twigs_-_oh_my_love_audio.mp3",
        description="",
    )

    nights = Song(
        user_id=6,
        title="Nights",
        image="https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde-1200x1200.jpg",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937556620483887104/Frank_Ocean_-_Nights_1.mp3",
        description="Blonde (alternatively titled blond) is the second studio album by American singer Frank Ocean.",
    )

    broken_clocks = Song(
        user_id=3,
        title="Broken Clocks",
        image="https://media.discordapp.net/attachments/858135958729392152/937557706141757510/brokenclocks.PNG?width=344&height=343",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937558146463965244/SZA_-_Broken_Clocks_Official_Audio.mp3",
        description="Ctrl (pronounced \"control\") is the debut studio album by American singer SZA. It was released on June 9, 2017, on Top Dawg Entertainment and RCA Records.",
    )

    de_nadie = Song(
        user_id=7,
        title="de nadie",
        image="https://media.discordapp.net/attachments/858135958729392152/937561487621390397/unknown.png?width=341&height=343",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937561850919415808/Kali_Uchis_de_nadie_Official_Audio.mp3",
        description="Sin Miedo (del Amor y Otros Demonios) is the second studio album and first Spanish album by Colombian-American singer Kali Uchis, released on November 18, 2020.",
    )

    labyrinth = Song(
        user_id=8,
        title="ラビリンス",
        image="https://media.discordapp.net/attachments/858135958729392152/937563557791416401/labyrinth.PNG?width=344&height=343",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937564078879174717/MONDO_GROSSO___1.mp3",
        description="from the forth coming album 何度でも新しく生まれる",
    )

    after_the_storm = Song(
        user_id=7,
        title="After the Storm",
        image="https://media.discordapp.net/attachments/858135958729392152/937566803641663509/unknown.png",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937566466595770499/Kali_Uchis_-_After_The_Storm_ft._Tyler_The_Creator_Bootsy_Collins.mp3",
        description="Isolation is the debut studio album by Colombian-American singer Kali Uchis, released worldwide on April 6, 2018, by Rinse Recordings, Virgin EMI Records, and Universal Music Group. The album was supported by four singles: “Dead to Me”, \"Tyrant\" featuring Jorja Smith, \"Nuestro Planeta\" featuring Reykon, and \"After the Storm\" featuring Tyler, the Creator and Bootsy Collins.",
    )

    to_me = Song(
        user_id=9,
        title="To Me",
        image="https://media.discordapp.net/attachments/858135958729392152/937568115447980032/unknown.png?width=342&height=342",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937567672986640444/Alina_Baraz_-_To_Me_Official_Lyric_Video.mp3",
        description="It Was Divine is Alina Baraz's debut studio album, following her 2018's EP The Color of You.",
    )

    every_summertime = Song(
        user_id=10,
        title="Every Summertime",
        image="https://media.discordapp.net/attachments/858135958729392152/937570957067960360/unknown.png?width=341&height=342",
        audio="https://cdn.discordapp.com/attachments/858135958729392152/937570350571618314/NIKI_-_Every_Summertime_Official_Video.mp3",
        description="",
    )

    db.session.add(sativa)
    db.session.add(good_days)
    db.session.add(while_were_young)
    db.session.add(wind_tempos)
    db.session.add(oh_my_love)
    db.session.add(nights)
    db.session.add(broken_clocks)
    db.session.add(de_nadie)
    db.session.add(labyrinth)
    db.session.add(after_the_storm)
    db.session.add(to_me)
    db.session.add(every_summertime)

    db.session.commit()

def undo_songs():
    db.session.execute("TRUNCATE songs RESTART IDENTITY CASCADE;")
    db.session.commit()
