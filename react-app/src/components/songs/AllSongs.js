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
        justify-items: center;
        display: grid;
        grid-template-columns: repeat(5, 220px);
        grid-auto-rows: repeat(6, 1fr);
    }
`

const renderAllSongCards = (songsObj) => {
    let songCards = [];
    for (let [key, song] of Object.entries(songsObj)) {
        songCards.push(
            <SongCard song={song} reactKey={key} />
        )
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
