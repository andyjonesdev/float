import styled from "styled-components"
import AudioPlayer from "react-h5-audio-player"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getNewSongs } from "../store/songs";
import SongCard from "./songs/SongCard"

import 'react-h5-audio-player/lib/styles.css';

const RecentlyAddedContainer = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    #recent-grid {
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr 1fr;
    }
`

const testSong = {
    artist: "Jhené Aiko",
    title: "Sativa (feat. Rae Sremmurd)",
    image: "https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
    audio: "https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
}

const renderNewSongCards = (songs) => {
    let songCards = [];
    songs.forEach((song) => {
        songCards.push(
            <SongCard song={song} reactKey={song.id}/>
        )
    })

    // fill any grid space with testSong
    let cardCount = songCards.length
    if (cardCount < 12) {
        for (let i = cardCount; i < 12; i++) {
            songCards.push(<SongCard song={testSong} key={`fillCard${i}`}></SongCard>)
        }
    }

    return songCards
}

const RecentlyAdded = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewSongs())
    }, [])

    let newSongs = useSelector(state => state.songs.entities.new)

    if (!newSongs) {
        return <></>
    }

    return(
        <RecentlyAddedContainer>
            <h2>Check out these new vibes</h2>
            <div id="recent-grid">
                {renderNewSongCards(newSongs)}
            </div>
        </RecentlyAddedContainer>
    )
}

export default RecentlyAdded
