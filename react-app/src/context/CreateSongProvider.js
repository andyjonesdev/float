import { createContext, useContext, useState } from "react";

const CreateSongContext = createContext();

export const useCreateSongContext = () => useContext(CreateSongContext);


const CreateSongProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return(
        <CreateSongContext.Provider
            value={{
                visible,
                show: () => setVisible(true),
                hide: () => setVisible(false),
            }}
        >
            {children}
        </CreateSongContext.Provider>
    )
}

export default CreateSongProvider
