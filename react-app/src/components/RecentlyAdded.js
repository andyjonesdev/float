import styled from "styled-components"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getNewSongs } from "../store/songs";
import SongCard from "./songs/SongCard"

import 'react-h5-audio-player/lib/styles.css';

const RecentlyAddedContainer = styled.div`
    margin-top: 30px;
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

const renderNewSongCards = (songs) => {
    let songCards = [];
    songs.forEach((song) => {
        songCards.push(
            <SongCard song={song} reactKey={song.id}/>
        )
    })

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
