import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createSong } from "../../store/songs"
import { useCreateSongContext } from "../../context/CreateSongProvider"

import ohMyLove from "../../audio/ohmylove.mp3"

const SongFormContainer = styled.div`
    .visible {
        visibility: visible;
        top: 5vh;
        // height: fit-content;
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


const CreateSongForm = () => {
    const createSongForm = useCreateSongContext()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let title = document.querySelector("#new-title").value
        let image = document.querySelector("#new-image").value
        let description = document.querySelector("#new-description").value
        let audio = document.querySelector("#new-audio").value
        console.log("IMAGE ----->", image )
        console.log("AUDIO ----->", audio )
        dispatch(createSong({
            title,
            description,
            image,
            audio,
            // audio: ohMyLove,
        }))
    }

    // if (!createSongForm.visible) return <></>

    return(
        <SongFormContainer>
            <SongForm className={createSongForm.visible ? "visible" : ""}
            onSubmit={handleSubmit}>
                <div className="field">
                    <label for="title">Song Title</label>
                    <input id="new-title" type="text" name="title"></input>
                </div>
                <div className="field">
                    <label for="art">Link to song art</label>
                    <input id="new-image" className="file-input" name="art"></input>
                </div>
                <div className="field">
                    <label for="audio">Link to song audio</label>
                    <input id="new-audio" className="file-input"name="audio"></input>
                </div>
                <div className="field">
                    <label for="description">Song Description (Optional)</label>
                    <textarea id="new-description" rows={5} name="description"></textarea>
                </div>
                <div className="field">
                    <button type="submit">Upload song</button>
                </div>
            </SongForm>
        </SongFormContainer>
    )
}

export default CreateSongForm
