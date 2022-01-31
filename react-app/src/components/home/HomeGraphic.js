import styled from "styled-components"
import { useSelector } from "react-redux"

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
    position: relative;
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
        z-index: 1;
        margin-top: 45px;
        max-width: 60%;
        text-align: center;
        font-size: 1.5rem;
    }

    #graphic-image-1 {
        left: -80px;
        bottom: -3px;
        position: absolute;
    }
    #graphic-image-2 {
        transform: scaleX(-1) scale(0.9);
        right: -20px;
        bottom: -3px;
        position: absolute;
    }

    #buttons {
        z-index: 1;
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
        button:first-child {
            margin-right: 10px;
        }

    }
`

const HomeGraphic = () => {
    const user = useSelector(state => state.session.user)
    return(
        <HomeGraphicContainer>
            <h1>Escape life's noise with float.</h1>
            <p>float offers a curated collection of dreamy, groovy, psychedelic, and floaty vibes for your relaxation.
                <br></br>Listen and enjoy, or upload your own vibes.</p>
            {!user && <div id="buttons">
                <button><SignupFormModal /></button>
                <button><LoginFormModal /></button>
            </div>}
            <img id="graphic-image-1" src="https://media.discordapp.net/attachments/858135958729392152/937538446451441714/ori_3618250_8ott8fejp0an9shz94lf935zxb6cwgf0usdtnb7z_blue-watercolor-lotus-flower-png-removebg-preview.png?width=487&height=325"></img>
            <img id="graphic-image-2" src="https://media.discordapp.net/attachments/858135958729392152/937538571030646784/blue-watercolor-lotus-flower-png-mystocks-5384-watercolorpng_433_1200x1200-removebg-preview.png?width=487&height=325"></img>
        </HomeGraphicContainer>
    )
}

export default HomeGraphic
