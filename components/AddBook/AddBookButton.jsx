import styles from "./AddBookButton.module.scss";

import React from 'react'

const AddBookButton = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const [formActive, setFormActive] = useState(false);

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