import styled from "styled-components"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, editComment } from "../../store/comments"

const CommentContainer = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: fit-content;

    #commenter-pfp {
        height: 75px;
        // height: 100%;
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

        #errors {
            margin-top: 5px;
            margin-bottom: 5px;
            color: red;

            li {
                list-style-type: circle;
                margin-left: 15px;
            }
        }

        #commenter-name {
            color: #5e5d5e;
            margin-top: 1%;
            width: 100%;
        }

        #commenter-comment {
            // background: green;
            margin-top: 1%;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        #edit-form {
            #edit-textarea {
                resize: none;
                height: 50px;
                width: 100%;
            }
        }
    }

    #commented-date {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px;
        // position: relative;
        // background: red;
        width: 15%;
        height: 100%;

        #buttons {
            position: absolute;
            // background-color: green;
            display: flex;
            justify-content: flex-end;
            right: 20px;
            bottom: 10px;
            // width: fit-content;

            button {
                box-shadow: 1px 1px 2px 0px;
                cursor: pointer;
                border-radius: 10px;
                transition: all 0.25s;
                border: 1px solid black;
                aspect-ratio: 1;
                width: 35px;

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
    const [showEdit, setShowEdit] = useState(false)
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()


    const handleDeleteComment = () => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            dispatch(deleteComment(comment.id))
        }
    }

    const handleEditComment = async() => {
        const content = document.querySelector("#edit-textarea").value
        const data = await dispatch(editComment({
            commentId: comment.id,
            content
        }))
        if (!Object.keys(data).includes("error")) {
            setShowEdit(false)
            setErrors([])
        } else {
            let errors = []
            for (let [field, message] of Object.entries(data.payload)) {
                errors.push(`${field}: ${message}`)
            }
            setErrors(errors)
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
                {errors.length > 0 &&
                <ul id="errors">
                    {errors.map((error, ind) => (
                    <li className="error" key={ind}>{error}</li>
                    ))}
                </ul>}
                {showEdit === false && <div id="commenter-comment">{comment.content}</div>}
                {showEdit === true &&
                <form id="edit-form">
                    <textarea id="edit-textarea">{comment.content}</textarea>
                </form>}
            </div>
            <div id="commented-date">
                <span>{comment.createdAt.split(" ").slice(1, 4).join(" ")}</span>
                {comment.userId === user?.id && <div id="buttons">
                    {!showEdit && <button onClick={() => setShowEdit(true)}>
                        <img src="https://media.discordapp.net/attachments/858135958729392152/937133293244133397/edit.png"></img>
                    </button>}
                    {showEdit && <button onClick={handleEditComment}>
                        <img src="https://media.discordapp.net/attachments/858135958729392152/937210754665443378/diskette.png"></img>
                    </button>}
                    <button onClick={handleDeleteComment}>
                        <img src="https://media.discordapp.net/attachments/858135958729392152/937133269743460472/trash.png"></img>
                    </button>
                </div>}
            </div>
        </CommentContainer>
    )
}

export default Comment
