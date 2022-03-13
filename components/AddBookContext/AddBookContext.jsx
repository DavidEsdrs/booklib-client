import { useState, createContext } from "react";

export const AddBookContext = createContext();

export default ({ children }) => {
    const [formActive, setFormActive] = useState(false);

    const store = {
        store: { formActive, setFormActive }
    }

    return (
        <AddBookContext.Provider value={store}>
            {children}
        </AddBookContext.Provider>
    )
}