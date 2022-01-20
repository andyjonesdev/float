import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

const PlayerProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return(
        <PlayerContext.Provider
            value={{
                visible,
                show: () => setVisible(true),
                hide: () => setVisible(false),
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider
