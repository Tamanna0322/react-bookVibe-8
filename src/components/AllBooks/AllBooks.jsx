import { useEffect, useState } from "react";
import Book from "../Book/Book";


const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div>
            <div className='mt-10'>
                <h2 className='text-4xl font-bold text-black text-center'>Books</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-10">
                
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;