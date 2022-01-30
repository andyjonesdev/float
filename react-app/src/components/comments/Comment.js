import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { deleteComment } from "../../store/comments"

const testComment = {
    commenterPfp: "https://cdn.discordapp.com/attachments/858135958729392152/934938618592641115/Sakura_Espeon-0.png",
    commenterName: "Andy is vibing",
    content: "This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. This is a long comment. ",
}

const CommentContainer = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75px;

    #commenter-pfp {
        // width: 10%;
        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;

        img {
            max-height: 100%;
        }
    }

    #commenter-name-and-comment {
        width: 77%;
        height: 100%;
        padding-left: 1%;

        #commenter-name {
            color: #5e5d5e;
            margin-top: 1%;
            width: 100%;
        }

        #commenter-comment {
            margin-top: 1%;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    #commented-date {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px;
        position: relative;
        // background: red;
        width: 15%;
        height: 100%;

        #buttons {
            position: absolute;
            // background-color: green;
            display: flex;
            justify-content: flex-end;
            right: 0;
            bottom: 0;
            // width: fit-content;

            button {
                cursor: pointer;
                border-radius: 10px;
                transition: all 0.25s;
                border: 1px solid grey;
                aspect-ratio: 1;
                width: 25%;

                img {
                    aspect-ratio: 1;
                    width: 100%;
                }
            }
            button:first-child {
                margin-right: 5px;
            }

            button:hover {
                transform: scale(1.05);
            }
        }

        span {
            // align-self: center;
            height: fit-content;
            margin-top: 5%;
            // background: blue;
        }
    }
`

const Comment = ({ comment }) => {
    const dispatch = useDispatch()


    const handleDeleteComment = () => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            dispatch(deleteComment(comment.id))
        }
    }

    if (!comment) return <></>

    return(
        <CommentContainer>
            <div id="commenter-pfp">
                <img src={comment.userImage ? comment.userImage : "https://media.discordapp.net/attachments/858135958729392152/935040055888719892/user.png"}></img>
            </div>
            <div id="commenter-name-and-comment">
                <div id="commenter-name">{comment.userName}</div>
                <div id="commenter-comment">{comment.content}</div>
            </div>
            <div id="commented-date">
                <span>{comment.createdAt.split(" ").slice(1, 4).join(" ")}</span>
                <div id="buttons">
                    <button>
                        <img src="https://media.discordapp.net/attachments/858135958729392152/937133293244133397/edit.png"></img>
                    </button>
                    <button onClick={handleDeleteComment}>
                        <img src="https://media.discordapp.net/attachments/858135958729392152/937133269743460472/trash.png"></img>
                    </button>
                </div>
            </div>
        </CommentContainer>
    )
}

export default Comment
