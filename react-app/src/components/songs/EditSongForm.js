import styled from "styled-components"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createSong, editSong, deleteSong } from "../../store/songs"
import { useEditSongContext } from "../../context/EditSongProvider"

const SongFormContainer = styled.div`
    .visible {
        visibility: visible;
        top: 5vh;
    }

    #close {
        cursor: pointer;
        transition: all 0.25s;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
    }

    #close:hover {
        transform: scale(1.05);
    }
    `

const SongForm = styled.form`
    transition: all 0.5s;
    z-index: 5;
    position: absolute;
    top: -10vh;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0;
    background-color: rgb(104,75,181);
    border: 1px solid grey;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    color: white;
    display: flex;
    width: 1180px;
    height: fit-content;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    .visible {
        color: pink;
    }

    textarea {
        display: flex;
        resize: none;
    }

    label {
        margin-bottom: 5px;
    }

    .file-input {
        width: 80%;
    }

    .field {
        display: flex;
        // background: lightgreen;
        align-items: center;
        flex-direction: column;
    }
`


const EditSongForm = () => {
    const editSongForm = useEditSongContext()
    const dispatch = useDispatch()
    const history = useHistory()
    const song = useSelector(state => state.songs.entities.song)


    const handleEdit = (e) => {
        e.preventDefault();
        let title = document.querySelector("#edit-title").value
        let image = document.querySelector("#edit-image").value
        let description = document.querySelector("#edit-description").value
        let audio = document.querySelector("#edit-audio").value
        console.log("IMAGE ----->", image )
        console.log("AUDIO ----->", audio )
        dispatch(editSong({
            title,
            description,
            image,
            audio,
            songId: song.id,
        }))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this song?")) {
            dispatch(deleteSong(song.id))
            history.push("/")
        }
    }

    return(
        <SongFormContainer>
            <SongForm className={editSongForm.visible ? "visible" : ""}
            onSubmit={handleEdit}>
                <div className="field">
                    <label for="title">Song Title</label>
                    <input id="edit-title" type="text" name="title" defaultValue={song.title}></input>
                </div>
                <div className="field">
                    <label for="art">Link to song art</label>
                    <input id="edit-image" className="file-input" name="art" defaultValue={song.image}></input>
                </div>
                <div className="field">
                    <label for="audio">Link to song audio</label>
                    <input id="edit-audio" className="file-input"name="audio" defaultValue={song.audio}></input>
                </div>
                <div className="field">
                    <label for="description">Song Description (Optional)</label>
                    <textarea id="edit-description" rows={5} name="description">{song.description ? song.description : ""}</textarea>
                </div>
                <div className="field" id="x-and-buttons">
                    <button onClick={handleEdit}>Save changes</button>
                    <button onClick={handleDelete}>Delete song</button>
                </div>
                <img id="close" onClick={() => editSongForm.hide()} src="https://cdn.discordapp.com/attachments/858135958729392152/936053312095154226/cancel.png"></img>
            </SongForm>
        </SongFormContainer>
    )
}

export default EditSongForm
