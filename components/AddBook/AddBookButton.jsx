import styles from "./AddBook.module.scss";
import React, { useContext, useState } from 'react'
import { AddBookContext } from "../AddBookContext/AddBookContext";

const AddBookButton = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const { store: { formActive, setFormActive } } = useContext(AddBookContext);

    return (
        <div>
            <button 
                className={`${styles.initial_add_book} ${formActive ? styles.deactivated : styles.active}`}
                onMouseEnter={() => setActiveBtn(true)} 
                onMouseLeave={() => setActiveBtn(false)} 
                onClick={() => setFormActive(true)}
            >
                <strong className={`${styles.initial_add_book_text} ${activeBtn ? styles.active : styles.deactivated}`}>
                    Adicionar livro à biblioteca
                </strong>
            </button>
        </div>
    )
}

export default AddBookButton