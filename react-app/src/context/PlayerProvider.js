import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);


const PlayerProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const playSong = async(audioLink) => {
        if (!visible) {
           await setVisible(true)
        }
        const player = document.querySelector("audio");
        player.src = audioLink
        player.play()
    }

    return(
        <PlayerContext.Provider
            value={{
                visible,
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
