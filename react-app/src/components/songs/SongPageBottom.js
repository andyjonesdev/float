import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Comment from "../comments/Comment"
import { createComment, getSongComments } from "../../store/comments"


const SongPageBottomContainer = styled.div`
    margin-top: 2%;
    width: 100%;
    height: 600px;
    height: fit-content;
    border-radius: 10px;
    background: rgba(144,116,216, 0.7);

    #write-comment {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 15%;
        border-bottom: 1px solid grey;

        #errors {
            margin-top: 10px;
            color: red;

            li {
                list-style-type: circle;
                margin-left: 15px;
            }

            h2 {
                margin-bottom: 5px;
            }
        }

        #pfp-and-add-comment {
            display: flex;
            flex-direction: row;
            // background: rgb(196,160,212);
            // height: fit-content;
            margin: 10px 0;
            width: 90%;

            #comment-pfp {
                // background: pink;
                // border-right: 1px solid grey;
                width: 70px;
                height: 70px;

                img {
                    max-height: 100%;
                }
            }

            #comment-form {
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                // background: lightblue;
                height: 70px;
                width: 100%;
                border-radius: 10px;

                #comment-input {
                    border: 1px solid grey;
                    padding-left: 15px;
                    font-size: 1rem;
                    height: 70%;
                    width: 95%;
                    border-radius: 10px;
                    // background: lightblue;
                }

                #post-comment {
                    cursor: pointer;
                    transition: all 0.25s;
                    width: 4%;
                    position: absolute;
                    right: 20px;
                    padding: 5px;
                    border-left: 1px solid grey;
                }
                #post-comment:hover {
                    transform: scale(1.05);
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
                min-height: 200px;

                #artist-pfp {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // background: purple;
                    height: 100%;

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
                    // background: grey;
                    height: 20%;
                    font-size: 1.20rem;
                    display: flex;
                    color: white;
                    // padding-left: 20px;
                    justify-content: center;
                    // align-items: center;
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
                        margin-bottom: 5px;
                    }
                }

                #description {
                    margin-top: 2%;
                    margin-bottom: 1%;

                    div {
                        margin-top: 5px;
                    }

                    span:first-child {
                        font-weight: bold;
                    }
                }
            }
        }
        #comments {
            height: fit-content;
            padding-top: 2%;
            padding-left: 15%;

            #no-comments {
                margin-top: 20px;
                margin-bottom: 100px;
            }

            #comments-amount {
                display: flex;
                align-items: center;
                border-bottom: 1px solid grey;

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
    const [errors, setErrors] = useState([])
    const { songId } = useParams()
    const song = useSelector(state => state.songs.entities.song)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongComments(songId))
    }, [])

    const comments = useSelector(state => state.comments.entities.songComments)

    const renderComments = (commentsObj) => {
        const commentsToRender = []
        for (let comment in commentsObj) {
            commentsToRender.push(
                <Comment comment={commentsObj[comment]}/>
            )
        }
        return commentsToRender
    }

    const handleCreateComment = async(e) => {
        e.preventDefault()
        let content = document.querySelector("#comment-input").value

        const data = await dispatch(createComment({
            content,
            songId: song.id
        }))
        if (!Object.keys(data).includes("error")) {
            document.querySelector("#comment-input").value = ""
        } else {
            let errors = []
            for (let [field, message] of Object.entries(data.payload)) {
                errors.push(`${field}: ${message}`)
            }
            setErrors(errors)
        }
    }

    if (!song || !comments) return <></>

    return(
        <SongPageBottomContainer>
            <div id="write-comment">
                {errors.length > 0 &&
                <ul id="errors">
                    <h2>The following errors were found: </h2>
                    {errors.map((error, ind) => (
                    <li className="error" key={ind}>{error}</li>
                    ))}
                </ul>}
                <div id="pfp-and-add-comment">
                    <div id="comment-pfp">
                        <img src={user ? user.image ? user.image : "https://media.discordapp.net/attachments/858135958729392152/935040055888719892/user.png" : "https://media.discordapp.net/attachments/858135958729392152/935040055888719892/user.png"}></img>
                    </div>
                    <form onSubmit={handleCreateComment} id="comment-form">
                        <input
                        id="comment-input"
                        placeholder="How does this song make you feel?"
                        ></input>
                        <img onClick={handleCreateComment} id="post-comment" src="https://media.discordapp.net/attachments/858135958729392152/937149721921863750/message_1.png"></img>
                    </form>
                </div>
            </div>
            <div id="artist-and-comments">
                <div id="artist-and-description">
                    <div id="artist-info">
                        <div id="artist-pfp">
                            <div id="artist-img">
                                <img src={song.artistImage ? song.artistImage : "https://media.discordapp.net/attachments/858135958729392152/935040055888719892/user.png"}></img>
                            </div>
                        </div>
                        <div id="artist-name">
                            <span>{song.artist}</span>
                        </div>
                    </div>
                    <div id="description-and-release">
                        <div id="release">
                            <span>Released on float:</span>
                            <span>{song.createdAt.split(" ").slice(1, 4).join(" ")}</span>
                        </div>
                        <div id="description">
                            {song.description && <span>About this song:</span>}
                            <div>{song.description}</div>
                        </div>
                    </div>
                </div>
                <div id="comments">
                    <div id="comments-amount">
                        <img id="comments-icon" src="https://media.discordapp.net/attachments/858135958729392152/937149721921863750/message_1.png"></img>
                        <span>{Object.keys(comments).length} comments</span>
                    </div>
                    <div>
                        {renderComments(comments)}
                        {Object.keys(comments).length === 0 &&
                        <div id="no-comments">There are no comments for this vibe yet. Be the first?</div>}
                    </div>
                </div>
            </div>
        </SongPageBottomContainer>
    )
}

export default SongPageBottom
