import React, { useState } from 'react'
import styles from "./Book.module.scss";
import moment from "moment";

const Book = ({ id, title, author, excerpt, published_at }) => {
    const [ btnText, setBtnText ] = useState(">");

    return (
        <div className={styles.container}>
            <div className={styles.main_info}>
                <h1>
                    <span className={styles.published_at}>
                        {moment(published_at).format("YYYY")}
                    </span>
                    {title}
                </h1>
                <h2>{author}</h2>
            </div>
            <div className={styles.more_info}>
                <p className={styles.excerpt}>
                    {excerpt}
                </p>
            </div>
            <div className={styles.button_container}>
                <button 
                    className={styles.read_book} 
                    onMouseEnter={() => setBtnText("Ver livro")}
                    onMouseLeave={() => setBtnText(">")}
                >
                    <strong>
                        {btnText}
                    </strong> 
                </button>
            </div>
        </div>
    )
}

export default Book;