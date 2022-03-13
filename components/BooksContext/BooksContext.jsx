import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";

export const BooksContext = createContext([]);

export default ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get("/books").
            then(res => setBooks(res.data)).
            catch(err => console.log({err}));
        
    }, []);

    const store = {
        state: { books, setBooks }
    }

    return <BooksContext.Provider value={store}>{children}</BooksContext.Provider>
}