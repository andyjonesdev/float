import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllSongs } from "../../store/songs";
import SongCard from "./SongCard";

const AllSongsContainer = styled.div`
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1180px;
    background-color: rgba(144,116,216, 0.7);

    h2 {
        font-size: 2rem;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    #all-songs-grid {
        // background: lightgreen;
        // width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(5, 220px);
        grid-template-rows: repeat(6, 1fr);
    }
`

const testSong = {
    artist: "Jhené Aiko",
    title: "Sativa (feat. Rae Sremmurd)",
    image: "https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
    audio: "https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
}

const renderAllSongCards = (songs) => {
    let songCards = [];
    songs.forEach((song) => {
        songCards.push(
            <SongCard song={song} reactKey={song.id}/>
        )
    })

    // fill any grid space with testSong
    let cardCount = songCards.length
    if (cardCount < 30) {
        for (let i = cardCount; i < 30; i++) {
            songCards.push(<SongCard song={testSong} key={`fillCard${i}`}></SongCard>)
        }
    }

    return songCards
}

const AllSongs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSongs())
    }, [])

    let allSongs = useSelector(state => state.songs.entities.songs)

    if (!allSongs) {
        return <></>
    }
    return(
        <AllSongsContainer>
            <h2>All vibes</h2>
            <div id="all-songs-grid">
                {renderAllSongCards(allSongs)}
            </div>
        </AllSongsContainer>
    )
}

export default AllSongs
