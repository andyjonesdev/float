import styled from "styled-components"
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createSong, editSong, deleteSong, getASong } from "../../store/songs"
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

    #errors {
        color: red;

        li {
            list-style-type: circle;
            margin-left: 15px;
        }

        h2 {
            margin-bottom: 5px;
            // font-size: 1.1rem;
        }
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


const EditSongForm = ({ song }) => {
    const [errors, setErrors] = useState([])
    const editSongForm = useEditSongContext()
    const dispatch = useDispatch()
    const history = useHistory()
    const [songToEdit, setSongToEdit] = useState(song);

    useEffect(() => {
        const updateSong = async () => {
            await setSongToEdit(song)
        }
        updateSong()
    }, [song])

    const handleEdit = async(e) => {
        e.preventDefault();
        let title = document.querySelector("#edit-title").value
        let image = document.querySelector("#edit-image").value
        let description = document.querySelector("#edit-description").value
        let audio = document.querySelector("#edit-audio").value
        const data = await dispatch(editSong({
            title,
            description,
            image,
            audio,
            songId: song.id,
        }))
        if (!Object.keys(data).includes("error")) {
            editSongForm.hide();
        } else {
            let errors = []
            for (let [field, message] of Object.entries(data.payload)) {
                errors.push(`${field}: ${message}`)
            }
            setErrors(errors)
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this song?")) {
            dispatch(deleteSong(song.id))
            history.push("/")
        }
    }

    if (!song) return <></>

    return(
        <SongFormContainer>
            <SongForm className={editSongForm.visible ? "visible" : ""}
            onSubmit={handleEdit}>
                {errors.length > 0 &&
                <ul id="errors">
                    <h2>The following errors were found: </h2>
                    {errors.map((error, ind) => (
                    <li className="error" key={ind}>{error}</li>
                    ))}
                </ul>}
                <div className="field">
                    <label for="title">Song Title</label>
                    <div key={songToEdit.title}>
                        <input id="edit-title" type="text" name="title" defaultValue={songToEdit.title}></input>
                    </div>
                </div>
                <div className="field">
                    <label for="art">Link to song art</label>
                    <div key={songToEdit.image}>
                        <input id="edit-image" className="file-input" name="art" defaultValue={songToEdit.image}></input>
                    </div>
                </div>
                <div className="field">
                    <label for="audio">Link to song audio</label>
                    <div key={songToEdit.audio}>
                        <input id="edit-audio" className="file-input"name="audio" defaultValue={songToEdit.audio}></input>
                    </div>
                </div>
                <div className="field">
                    <label for="description">Song Description (Optional)</label>
                    <div key={songToEdit.description}>
                        <textarea id="edit-description" rows={5} name="description">{songToEdit.description ? songToEdit.description : ""}</textarea>
                    </div>
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
