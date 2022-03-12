import React from 'react'
import styles from "./Book.module.scss";

const Book = ({ id, title, author, excerpt, published_at }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
        </div>
    )
}

export default Book;