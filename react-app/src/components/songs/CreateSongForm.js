import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createSong } from "../../store/songs"
import { useCreateSongContext } from "../../context/CreateSongProvider"

const SongForm = styled.form`
    // position: relative;
    // top: 0;
    padding: 10px 0;
    background-color: rgb(104,75,181);
    border: 1px solid lightgrey;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    color: white;
    display: flex;
    width: 1180px;
    height: fit-content;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

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


const CreateSongForm = () => {
    const createSong = useCreateSongContext()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = document.querySelector("#new-title").value
        let image = document.querySelector("#new-image").value
        let description = document.querySelector("#new-description").value
        let audio = document.querySelector("#new-audio").value
        dispatch(createSong({
            title,
            description,
            image,
            audio,
        }))
    }

    if (!createSong.visible) return <></>

    return(
        <SongForm
        onSubmit={handleSubmit}>
            <div className="field">
                <label for="title">Song Title</label>
                <input id="new-title" type="text" name="title"></input>
            </div>
            <div className="field">
                <label for="art">Song Art</label>
                <input id="new-image" className="file-input" type="file" name="art"></input>
            </div>
            <div className="field">
                <label for="audio">Song Audio</label>
                <input id="new-audio" className="file-input" type="file" name="audio"></input>
            </div>
            <div className="field">
                <label for="description">Song Description (Optional)</label>
                <textarea id="new-description" rows={5} name="description"></textarea>
            </div>
            <div className="field">
                <button type="submit">Upload song</button>
            </div>
        </SongForm>
    )
}

export default CreateSongForm
