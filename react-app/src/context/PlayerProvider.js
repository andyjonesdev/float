import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);


const PlayerProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [song, setSong] = useState(null)


    const playSong = async(audioLink) => {
        await setSong(audioLink);

        if (!visible) {
            setVisible(true)
        }
        const player = document.querySelector("audio");
        player.play()
    }

    return(
        <PlayerContext.Provider
            value={{
                visible,
                song,
                playSong,
                show: () => setVisible(true),
                hide: () => setVisible(false),
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider
