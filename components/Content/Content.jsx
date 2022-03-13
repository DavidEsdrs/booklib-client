import React, { useContext } from 'react';
import Book from "../Book/Book";
import styles from "./Content.module.scss";
import NewBookWrapper from "../NewBookWrapper/NewBookWrapper";
import { BooksContext } from "../BooksContext/BooksContext.jsx";
import AddBookContextProvider, { AddBookContext } from "../AddBookContext/AddBookContext";

const Content = () => {
    const { store } = useContext(BooksContext);

    return (
        <div className={styles.container}>
            <AddBookContextProvider>
                <NewBookWrapper />
            </AddBookContextProvider>

            <main className={styles.main}>
                <ul>
                    {store.books.map(book => (
                        <Book key={book.id} {...book} />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Content;