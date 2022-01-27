import styled from "styled-components"
import RecentlyAdded from "../RecentlyAdded"
import HomeGraphic from "./HomeGraphic"

const HomeContainer = styled.div`
    width: 1180px;
`

const Home = () => {
    return(
        <HomeContainer>
            <HomeGraphic />
            <RecentlyAdded />
        </HomeContainer>
    )
}

export default Home
