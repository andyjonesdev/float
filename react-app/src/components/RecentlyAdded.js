import styled from "styled-components"
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player"

import SongCard from "./songs/SongCard"

import 'react-h5-audio-player/lib/styles.css';

const RecentlyAddedContainer = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    #recent-grid {
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr 1fr;
    }
`

const RecentlyAdded = () => {
    return(
        <RecentlyAddedContainer>
            {/* <ReactAudioPlayer
            src="https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
            controls
            /> */}
            {/* <AudioPlayer
            volume={0.1}
            layout={"horizontal-reverse"}
            showSkipControls={true}
            showJumpControls={false}
            showFilledProgress={true}
            showFilledVolume={true}
            src="https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
            /> */}
            <h2>Check out these new vibes</h2>
            <div id="recent-grid">
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
            </div>
        </RecentlyAddedContainer>
    )
}

export default RecentlyAdded
