import styled from "styled-components"
import Wave from "@foobar404/wave"
import { useState, useEffect } from "react"
import { usePlayer } from "../../context/PlayerProvider"

import ohMyLove from "../../audio/FKA twigs - oh my love (audio).mp3"

const HomeGraphicContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        display: flex;
    }
`

const HomeGraphic = () => {
    const player = usePlayer()
    // let [wave] = useState(new Wave());

    // useEffect(() => {
    //     player.playSong(ohMyLove)
    //     setTimeout(() => {
    //         document.querySelector("audio").setAttribute("crossorigin", "anonymous")
    //         wave.fromElement("audio", "canvas", {
    //             type: "stitches",
    //             colors: ["purple", "pink"]
    //         });
    //         wave.fromElement("audio", "canvas2", {
    //             type: "flower blocks",
    //             colors: ["purple", "lavender"]
    //         });
    //     }, 2000)
    // }, [])


    return(
        <HomeGraphicContainer>
            {/* <canvas width="500" height="500" id="canvas"></canvas>
            <canvas width="500" height="500" id="canvas2"></canvas> */}
        </HomeGraphicContainer>
    )
}

export default HomeGraphic
