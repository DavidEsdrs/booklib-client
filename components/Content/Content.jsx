import React from 'react'

const books = [
    { id: Math.random(), title: "A volta dos que não foram", author: "David Brook", excerpt: "Um livro que conta a história da volta dos que não foram", published_at: new Date() }
]

const Content = () => {
    return (
        <main className="container">
            <div className="">
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Content;