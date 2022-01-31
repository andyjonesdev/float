import styled from "styled-components"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createSong } from "../../store/songs"
import { useCreateSongContext } from "../../context/CreateSongProvider"

const SongFormContainer = styled.div`
    .visible {
        visibility: visible;
        top: 5vh;
    }
    `

    const SongForm = styled.form`
    transition: all 0.5s;
    z-index: 1000;
    position: absolute;
    top: -15vh;
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
    height: 150px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    .visible {
        color: pink;
    }

    #errors {
        width: 230px;
        color: red;

        li {
            list-style-type: circle;
            margin-left: 15px;
        }

        h2 {
            margin-bottom: 5px;
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
        align-items: center;
        flex-direction: column;
    }
`


const CreateSongForm = () => {
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const createSongForm = useCreateSongContext()
    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault();
        let title = document.querySelector("#new-title").value
        let image = document.querySelector("#new-image").value
        let description = document.querySelector("#new-description").value
        let audio = document.querySelector("#new-audio").value
        const data = await dispatch(createSong({
            title,
            description,
            image,
            audio,
        }))
        if (!Object.keys(data).includes("error")) {
            createSongForm.hide();
            document.querySelector("#new-title").value = ""
            document.querySelector("#new-image").value = ""
            document.querySelector("#new-description").value = ""
            document.querySelector("#new-audio").value = ""
            history.push(`/songs/${data.payload.id}`)
        } else {
            console.log(data)
            let errors = []
            for (let [field, message] of Object.entries(data.payload)) {
                errors.push(`${field}: ${message}`)
            }
            setErrors(errors)
        }
    }

    return(
        <SongFormContainer>
            <SongForm className={createSongForm.visible ? "visible" : ""}
            onSubmit={handleSubmit}>
                {errors.length > 0 &&
                <ul id="errors">
                    <h2>The following errors were found: </h2>
                    {errors.map((error, ind) => (
                    <li className="error" key={ind}>{error}</li>
                    ))}
                </ul>}
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
