import styled from "styled-components"
import RecentlyAdded from "./RecentlyAdded"

const HomeContainer = styled.div`
    width: 1180px;
`

const Home = () => {
    return(
        <HomeContainer>
            <RecentlyAdded />
        </HomeContainer>
    )
}

export default Home
