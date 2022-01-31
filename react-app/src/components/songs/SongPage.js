import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import SongPageTop from "./SongPageTop"
import SongPageBottom from "./SongPageBottom"
import EditSongForm from "./EditSongForm"
import { getASong } from "../../store/songs"


const SongPageContainer = styled.div`
    width: 1180px;
    margin-top: 1vh;
`

const SongPage = () => {
    const dispatch = useDispatch();
    const { songId } = useParams();

    useEffect(() => {
        dispatch(getASong(songId))
    }, [])

    const song = useSelector(state => state.songs.entities.song)

    if (!song) return <></>

    return(
        <SongPageContainer>
            <EditSongForm song={song}/>
            <SongPageTop />
            <SongPageBottom />
        </SongPageContainer>
    )
}

export default SongPage
