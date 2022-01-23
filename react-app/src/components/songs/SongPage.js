import styled from "styled-components"

import SongPageTop from "./SongPageTop"

const SongPageContainer = styled.div`
    width: 1180px;
    margin-top: 1vh;

    // #song-page-top:hover {
    //     transform: scale(1.05);
    // }
`

const SongPage = () => {
    return(
        <SongPageContainer>
            <SongPageTop />
        </SongPageContainer>
    )
}

export default SongPage
