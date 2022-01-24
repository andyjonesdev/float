import styled from "styled-components"
import { useSelector } from "react-redux"

const testSong = {
    artist: "Jhené Aiko",
    title: "Sativa (feat. Swae Lee)",
    image: "https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
    audio: "https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
}

const SongPageTopContainer = styled.div`
    display: flex;
    width: 100%;
    height: 355px;
    transition: all 0.5s;
    border-radius: 10px;
    background-color: rgba(144,116,216, 0.7);
    position: relative;

    #left {
        width: 70%;

        #left-top {
            display: flex;
            height: 60%;

            #play-button, #title-artist, #date-info {
                margin-top: 20px;
            }

            #play-button {
                cursor: pointer;
                display: flex;
                height: 30%;
                margin-left: 2%;
                transition: all 0.5s
            }

            #play-button:hover {
                transform: scale(1.1);
            }

            #title-artist {
                // background-color: green;
                margin-left: 2%;
                width: 75%;

                #title {
                    font-size: 1.75rem;
                    color: white;
                    background-color: rgb(104,75,181);
                    width: fit-content;
                    margin-bottom: 1%;
                    padding: 1%;
                }

                #artist {
                    color: white;
                    font-size: 1.25rem;
                    width: fit-content;
                    background-color: rgb(104,75,181);
                    padding: 1%;
                }
            }
            #date-info {
                font-size: 1.1rem;
                padding-top: 10px;
                color: white;
            }
        }

        #left-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40%;
            border: 1px solid rgb(104,75,181);
            margin-left: 10px;

            #visualizer {
            }
        }
    }

    #right {
        display: flex;
        justify-content: center;
        align-items: center;
        right: 50%;
        width: 30%;

        #img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90%;
            aspect-ratio: 1;

            img {
                height: 100%;
                width: auto;
                aspect-ratio: 1;
            }
        }

    }

`

const SongPageTop = () => {
    const song = useSelector(state => state.songs.entities.song)

    if (!song) return <></>

    return(
        <SongPageTopContainer id="song-page-top">
            <div id="left">
                <div id="left-top">
                    <img id="play-button" src="https://media.discordapp.net/attachments/858135958729392152/933519058383536178/play.png?width=510&height=510"></img>
                    <div id="title-artist">
                        <div id="title">{song.title}</div>
                        <div id="artist">{song.artist}</div>
                    </div>
                    <div id="date-info">
                        <div id="date">4 years ago</div>
                    </div>
                </div>
                <div id="left-bottom">
                    <div id="visualizer">Visualizer will go here</div>
                </div>
            </div>
            <div id="right">
                <div id="img-container">
                    <img src={song.image}></img>
                </div>
            </div>
        </SongPageTopContainer>
    )
}

export default SongPageTop
