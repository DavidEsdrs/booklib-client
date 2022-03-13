import React, { useContext, useRef, useState } from 'react'
import { api } from "../../services/api";
import styles from "./styles.module.scss";
import { BooksContext } from "../BooksContext/BooksContext";
import AddBookButton from "../AddBook/AddBookButton";

const NewBookWrapper = () => {
    const { state: { books, setBooks } } = useContext(BooksContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [published_at, setPublishedAt] = useState(new Date());
    const [content, setContent] = useState("");

    const clearValues = () => {
        setTitle("");
        setAuthor("");
        setExcerpt("");
        setPublishedAt(new Date());
        setContent("");
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { book } = await api.post("/books", { title, author, excerpt, content, published_at });
        clearValues();
        setBooks([book, ...books]);
    }

    return (
        <div className={styles.container}>
            <AddBookButton />
            <form className={`${formActive ? styles.active : styles.deactivated}`} onSubmit={onSubmit}>
                <div className={styles.info_form}>
                    <label htmlFor="book_title">
                        <input onChange={e => setTitle(e.target.value)} id="book_title" className={styles.input} type="text" placeholder="Título" />
                    </label>
                    <label htmlFor="book_author">
                        <input onChange={e => setAuthor(e.target.value)} id="book_author" className={styles.input} type="text" placeholder="Autor" />
                    </label>
                    <label htmlFor="book_excerpt">
                        <input onChange={e => setExcerpt(e.target.value)} id="book_excerpt" className={styles.input} type="text" placeholder="Resumo" />
                    </label>
                    <label htmlFor="book_published_at">
                        <input onChange={e => setPublishedAt(e.target.value)} id="book_published_at" className={styles.book_published_at} type="date" />
                    </label>
                </div>

                <textarea onChange={e => setContent(e.target.value)} className={styles.book_content} name="" id="" cols="30" rows="10" placeholder="Conteúdo"></textarea>

                <button className={styles.add_book} type="submit">
                    <strong>
                        Adicionar livro
                    </strong>
                </button>
            </form>
        </div>
    )
}

export default NewBookWrapper