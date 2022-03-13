import React, { useContext } from 'react';
import Book from "../Book/Book";
import styles from "./Content.module.scss";
import NewBookWrapper from "../NewBookWrapper/NewBookWrapper";
import { BooksContext } from "../BooksContext/BooksContext.jsx";

const Content = () => {
    const { state } = useContext(BooksContext);

    return (
        <div className={styles.container}>
            <NewBookWrapper />

            <main className={styles.main}>
                <ul>
                    {state.books.map(book => (
                        <Book key={book.id} {...book} />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Content;