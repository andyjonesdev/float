import styled from "styled-components"
import LoginFormModal from "../auth/LoginFormModal"
import SignupFormModal from "../auth/SignupFormModal"


const HomeGraphicContainer = styled.div`
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 1px 1px 2px 0px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    background-image: url("https://miro.medium.com/max/7920/0*dU-eHhSQerI2aHW6");
    background-size: cover;
    background-position: center;
    justify-content: center;

    h1 {
        font-size: 2.5rem;
    }

    p {
        margin-top: 15px;
        max-width: 60%;
        text-align: center;
        font-size: 1.5rem;
    }

    #buttons {
        // background: lightgreen;
        margin-top: 20px;
        button {
            transition: all 0.25s;
            cursor: pointer;
            font-size: 1.25rem;
            border: 1px solid black;
            border-radius: 10px;
            width: 200px;
            height: 50px;
            background-color: rgba(104,75,181,0.9);
            color: white;
        }
        button:hover {
            transform: scale(1.05);
        }
        button:first-child {
            margin-right: 10px;
        }
    }

    img {
        width: 100%;
        display: flex;
    }
`

const HomeGraphic = () => {
    return(
        <HomeGraphicContainer>
            <h1>Escape life's noise with float.</h1>
            <p>float offers a curated collection of dreamy, psychedelic vibes. Listen and enjoy, or upload your own vibes.</p>
            <div id="buttons">
                <button><SignupFormModal /></button>
                <button><LoginFormModal /></button>
            </div>
        </HomeGraphicContainer>
    )
}

export default HomeGraphic
