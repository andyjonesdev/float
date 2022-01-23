import styled from "styled-components"
import { useEffect } from "react"

import { usePlayer } from "../../context/PlayerProvider";

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
const SongCard = ({ song, reactKey }) => {
    const player = usePlayer();


    return(
        <SongCardContainer className="song-card" key={reactKey}>
            <div id="image-and-play" onClick={() => player.playSong(song.audio)}>
                <img id="play" src="https://media.discordapp.net/attachments/858135958729392152/933519058383536178/play.png?width=510&height=510"></img>
                <img src={song.image}></img>
            </div>
            <span id="title">{song.title}</span>
            <span id="artist">{song.artist}</span>
        </SongCardContainer>
    )
}

export default SongCard
