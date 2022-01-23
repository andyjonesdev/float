import styled from "styled-components"

import Comment from "../comments/Comment"

const testSong = {
    artist: "Jhené Aiko",
    title: "Sativa (feat. Swae Lee)",
    image: "https://media.discordapp.net/attachments/928062866412683274/933176102141173810/unknown.png",
    audio: "https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3",
    description: `
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
    Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.
    `
}

const SongPageBottomContainer = styled.div`
    margin-top: 2%;
    width: 100%;
    height: 600px;
    height: fit-content;
    border-radius: 10px;
    background: rgba(144,116,216, 0.7);

    #write-comment {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
        border-bottom: 1px solid grey;

        #pfp-and-add-comment {
            display: flex;
            flex-direction: row;
            background: rgb(196,160,212);
            // height: fit-content;
            margin: 10px 0;
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
        // background: pink;

        #artist-and-description {
            display: flex;
            // background: cyan;
            width: 100%;
            height: 40%;
            border-bottom: 1px solid grey;

            #artist-info {
                display: flex;
                flex-direction: column;
                // background: green;
                width: 15%;

                #artist-pfp {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // background: purple;
                    height: 80%;

                    #artist-img {
                        // background: orange;
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
                    color: white;
                    justify-content: center;
                    align-items: center;
                }
            }

            #description-and-release {
                // background: red;
                width: 82.5%;
                padding-top: 2%;
                padding-left: 2%;

                #release {
                    display: flex;
                    flex-direction: column;

                    span:first-child {
                        font-weight: bold;
                        margin-bottom: 0.25%;
                    }
                }

                #description {
                    margin-top: 2%;
                    margin-bottom: 1%;
                }
            }
        }
        #comments {
            height: fit-content;
            padding-top: 2%;
            padding-left: 15%;

            #comments-amount {
                display: flex;
                align-items: center;
                border-bottom: 1px solid grey;
                // margin-bottom: 2%;

                #comments-icon {
                    height: 30px;
                    margin-right: 1%;
                }

                span {
                    font-size: 1.25rem;
                }
            }
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
                    <div id="description-and-release">
                        <div id="release">
                            <span>Released on float:</span>
                            <span>26 January 2018</span>
                        </div>
                        <div id="description">{testSong.description}</div>
                    </div>
                </div>
                <div id="comments">
                    <div id="comments-amount">
                        <img id="comments-icon" src="https://cdn.discordapp.com/attachments/858135958729392152/934933099018588180/message.png"></img>
                        <span>1,841 comments</span>
                    </div>
                    <div>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </SongPageBottomContainer>
    )
}

export default SongPageBottom
