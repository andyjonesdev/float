import { createContext, useContext, useState } from "react";

const EditSongContext = createContext();

export const useEditSongContext = () => useContext(EditSongContext);


const EditSongProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return(
        <EditSongContext.Provider
            value={{
                visible,
                show: () => setVisible(true),
                hide: () => setVisible(false),
            }}
        >
            {children}
        </EditSongContext.Provider>
    )
}

export default EditSongProvider
