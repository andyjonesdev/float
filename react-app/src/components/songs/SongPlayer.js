import styled from "styled-components"
import AudioPlayer from "react-h5-audio-player"
import { usePlayer } from "../../context/PlayerProvider";

import 'react-h5-audio-player/lib/styles.css';

const SongPlayerContainer = styled.div`
    // visibility: hidden;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    .rhap_container {
        width: 1180px;
        background-color: rgb(104,75,181);
        * {
            color: white;
        }
    }

`

const SongPlayer = ({ src }) => {
    const player = usePlayer()

    if (!player.visible) {
        return <></>
    }
    return(
    <SongPlayerContainer>
        <AudioPlayer
        id="player"
        volume={0.1}
        layout={"horizontal-reverse"}
        showSkipControls={true}
        showJumpControls={false}
        showFilledProgress={true}
        showFilledVolume={true}
        src={src}
        />
    </SongPlayerContainer>
    )
}

export default SongPlayer
