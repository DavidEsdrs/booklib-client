import React, { useState, useEffect } from 'react';
import Book from "../Book/Book";
import styles from "./Content.module.scss";
import { api } from "../../services/api";

const Content = () => {
    const [books, setBooks] = useState([]);

    useEffect(async () => {
        try {
            const res = await api.get("/books");
            setBooks(res.data);
        }
        
        catch(err) {
            console.log(err);
        }
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <ul>
                    {books.map(book => (
                        <Book key={book.id} {...book} />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Content;