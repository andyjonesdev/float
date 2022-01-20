import styled from "styled-components"

const testSong = {
    artistName: "Jhené Aiko",
    title: "Sativa (feat. Rae Sremmurd)",
    image: "https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
    audio: "https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
}

const SongCardContainer = styled.div`
    background-color: rgb(159,99,197);
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-bottom: 1vh;
    transition: transform .2s;

    &:hover {
        transform: scale(1.2);
        & {
            z-index: 100;
        }
    }

    #image-and-play {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    #image-and-play:hover {
        #play {
            opacity: 100%;
            transition: 0.4s;
        }
    }

    #play {
        z-index: 2;
        height: 30%;
        width: auto;
        position: absolute;
        opacity: 0%;
    }

    img {
        aspect-ratio: 1;
        width: 100%;
    }

    #artist {
        color: lightgrey;
        margin-top: 2%;
        margin-left: 2%;
        margin-bottom: 3%;
    }

    #title {
        margin-top: 3%;
        margin-left: 2%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`
// one SongCard which will be displayed in Home
const SongCard = () => {
    return(
        <SongCardContainer>
            <div id="image-and-play">
                <img id="play" src="https://media.discordapp.net/attachments/858135958729392152/933519058383536178/play.png?width=510&height=510"></img>
                <img src={testSong.image}></img>
            </div>
            <span id="title">{testSong.title}</span>
            <span id="artist">{testSong.artistName}</span>
        </SongCardContainer>
    )
}

export default SongCard
