import styled from "styled-components"

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
    // background: lightblue;
    width: 100%;
    height: 75px;

    div {
        // background: lightgreen;
        // border: 1px solid grey;
    }

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
            // white-space: nowrap;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    #commented-date {
        display: flex;
        justify-content: center;
        width: 15%;
        height: 100%;

        span {
            height: fit-content;
            margin-top: 5%;
            // background: blue;
        }
    }
`

const Comment = () => {
    return(
        <CommentContainer>
            <div id="commenter-pfp">
                <img src="https://cdn.discordapp.com/attachments/858135958729392152/934938618592641115/Sakura_Espeon-0.png"></img>
            </div>
            <div id="commenter-name-and-comment">
                <div id="commenter-name">{testComment.commenterName}</div>
                <div id="commenter-comment">{testComment.content}</div>
            </div>
            <div id="commented-date">
                <span>9 days ago</span>
            </div>
        </CommentContainer>
    )
}

export default Comment
