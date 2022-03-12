import React from 'react';
import Book from "../Book/Book";
import styles from "./Content.module.scss";

const books = [
    { id: Math.random(), title: "A volta dos que não foram", author: "David Brook", excerpt: "Um livro que conta a história da volta dos que não foram", published_at: new Date() }
]

const Content = () => {
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