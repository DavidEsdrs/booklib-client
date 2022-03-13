import React from 'react'
import Header from "../Header/Header.jsx";
import { BooksContext } from "../BooksContext/BooksContext.jsx"; 

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout