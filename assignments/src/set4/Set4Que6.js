import { useState } from "react"

export default function Ff2({ data2 }) {
    const [book, setBook] = useState(data2)
    const allBook = () => setBook(data2)
    const classicBooks = () => setBook(data2.filter((val) => val.genre == "Classic"))
    const dyspoBooks = () => setBook(data2.filter((val) => val.genre == "Dystopian"))
    const adultBooks = () => setBook(data2.filter((val) => val.genre == "Young Adult"))
    return (<div>
        <h1>Books</h1>
        <button onClick={allBook}>All</button>
        <button onClick={classicBooks}>Classic</button>
        <button onClick={dyspoBooks}>Dystopian</button>
        <button onClick={adultBooks}>Young Adult</button>
        {book.map((val) => <p><h1>{val.title}</h1>{val.author}</p>)}
    </div>)
}