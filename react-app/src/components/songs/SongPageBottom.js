import styled from "styled-components"

const testSong = {
    artist: "Jhené Aiko",
    title: "Sativa (feat. Swae Lee)",
    image: "https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
    audio: "https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"
}

const SongPageBottomContainer = styled.div`
    margin-top: 2%;
    width: 100%;
    height: 600px;
    border-radius: 10px;
    background: rgba(144,116,216, 0.7);

    #write-comment {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;

        #pfp-and-add-comment {
            display: flex;
            flex-direction: row;
            background: rgb(196,160,212);
            height: fit-content;
            width: 90%;

            #comment-pfp {
                background: pink;
                width: 70px;
                height: 70px;
            }

            #comment-form {
                display: flex;
                justify-content: center;
                align-items: center;
                // background: lightblue;
                height: 70px;
                width: 100%;

                #comment-input {
                    border: none;
                    padding-left: 15px;
                    font-size: 1rem;
                    height: 70%;
                    width: 95%;
                    // background: lightblue;
                }
            }
        }
    }

    #artist-and-comments {
        display: flex;
        flex-direction: column;
        height: 85%;
        background: pink;

        #artist-and-description {
            display: flex;
            background: cyan;
            width: 100%;
            height: 40%;

            #artist-info {
                display: flex;
                flex-direction: column;
                background: green;
                width: 17.5%;

                #artist-pfp {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: purple;
                    height: 80%;

                    #artist-img {
                        background: orange;
                        height: 80%;
                        width: auto;
                        aspect-ratio: 1;
                        border-radius: 50%;
                        overflow: hidden;

                        img {
                            max-height: 100%;
                        }
                    }
                }
                #artist-name {
                    height: 20%;
                    font-size: 1.25rem;
                    display: flex;
                    // background: blue;
                    color: white;
                    justify-content: center;
                    align-items: center;
                }
            }

            #description {
                background: red;
                width: 82.5%;
            }
        }
        #comments {
            height: fit-content;
        }
    }
`

const SongPageBottom = () => {
    return(
        <SongPageBottomContainer>
            <div id="write-comment">
                <div id="pfp-and-add-comment">
                    <div id="comment-pfp"></div>
                    <form id="comment-form">
                        <input
                        id="comment-input"
                        placeholder="How does this song make you feel?"
                        ></input>
                    </form>
                </div>
            </div>
            <div id="artist-and-comments">
                <div id="artist-and-description">
                    <div id="artist-info">
                        <div id="artist-pfp">
                            <div id="artist-img">
                                <img src={testSong.image}></img>
                            </div>
                        </div>
                        <div id="artist-name">
                            <span>{testSong.artist}</span>
                        </div>
                    </div>
                    <div id="description">description</div>
                </div>
                <div id="comments">comments</div>
            </div>
        </SongPageBottomContainer>
    )
}

export default SongPageBottom
