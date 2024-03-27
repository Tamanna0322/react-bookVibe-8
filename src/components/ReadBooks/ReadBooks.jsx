import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../utility/localStorage";
import BookCard from "../BookCard/BookCard";


const ReadBooks = () => {
    const books = useLoaderData();

    const [bookSelect, setBookSelect] = useState([]);

    useEffect(() => {
        const storedReadBookId = getReadBooks();
        if(books.length > 0){
            const selectBook = books.filter(book => storedReadBookId.includes(book.id))
            // console.log(books, storedReadBookId, selectBook);
            setBookSelect(selectBook);
        }
    }, [])
    return (
        <div>
            {
                bookSelect.map(bookCard => <BookCard key={bookCard.id} bookCard={bookCard}></BookCard> )
            }
        </div>
    );
};

export default ReadBooks;