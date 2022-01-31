import styled from "styled-components"
import { useSelector } from "react-redux"
import { useEditSongContext } from "../../context/EditSongProvider"
import { usePlayer } from "../../context/PlayerProvider"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"

TimeAgo.setDefaultLocale(en);
TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

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
                z-index: 1;
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
                z-index: 1;
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
                    z-index: 1;
                    color: white;
                    font-size: 1.25rem;
                    width: fit-content;
                    background-color: rgb(104,75,181);
                    padding: 1%;
                }
            }
            #date-info {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                font-size: 1.1rem;
                padding-top: 10px;
                color: white;

                img {
                    cursor: pointer;
                    margin-top: 5px;
                    width: 35px;
                    transition: all 0.5s;
                }
                img:hover {
                    transform: rotate(45deg);
                }
            }
        }

        #left-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 40%;

            img {
                border-radius: 0 0 10px 10px;
                z-index: 0;
                position: absolute;
                bottom: 20px;
                right: 0;
                width: 100%;
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
                z-index: 1;
                height: 100%;
                width: auto;
                aspect-ratio: 1;
            }
        }

    }

`

const SongPageTop = () => {
    const editSong = useEditSongContext();
    const player = usePlayer();
    const user = useSelector(state => state.session.user)
    const song = useSelector(state => state.songs.entities.song)

    if (!song || !player) return <></>

    return(
        <SongPageTopContainer id="song-page-top">
            <div id="left">
                <div id="left-top">
                    <img id="play-button" onClick={() => player.playSong(song.audio)} src="https://media.discordapp.net/attachments/858135958729392152/933519058383536178/play.png?width=510&height=510"></img>
                    <div id="title-artist">
                        <div id="title">{song.title}</div>
                        <div id="artist">{song.artist}</div>
                    </div>
                    <div id="date-info">
                        <div id="date">{timeAgo.format(Date.parse(song.createdAt))}</div>
                        {song.userId === user?.id && <img onClick={() => editSong.show()} src="https://cdn.discordapp.com/attachments/858135958729392152/936043833567871006/settings.png"></img>}
                    </div>
                </div>
                <div id="left-bottom">
                    <img src="https://media.discordapp.net/attachments/858135958729392152/937586821343371265/png-transparent-purple-petaled-flowers-floral-design-cut-flowers-purple-purple-flowers-flower-arranging-other-violet-removebg-preview.png?width=710&height=343"></img>
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
