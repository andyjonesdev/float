import styled from "styled-components"

const SongForm = styled.form`
    position: relative;
    top: 0;
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

const handleSubmit = (e) => {
    e.preventDefault();
}

const CreateSongForm = () => {
    return(
        <SongForm onSubmit={handleSubmit}>
            <div className="field">
                <label for="title">Song Title</label>
                <input type="text" name="title"></input>
            </div>
            <div className="field">
                <label for="art">Song Art</label>
                <input className="file-input" type="file" name="art"></input>
            </div>
            <div className="field">
                <label for="title">Song Audio</label>
                <input className="file-input" type="file" name="title"></input>
            </div>
            <div className="field">
                <label for="description">Song Description (Optional)</label>
                <textarea rows={5} name="description"></textarea>
            </div>
            <div className="field">
                <button type="submit">Upload song</button>
            </div>
        </SongForm>
    )
}

export default CreateSongForm
