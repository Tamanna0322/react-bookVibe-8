import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../utility/localStorage";
import BookCard from "../BookCard/BookCard";
import PropTypes from 'prop-types';



const ReadBooks = ({sortCriteria}) => {
    console.log(sortCriteria);
   
    const books = useLoaderData();

    const [bookSelect, setBookSelect] = useState([]);
   

    useEffect(() => {

        const storedReadBookId = getReadBooks();

        let selectBook = [];
       
        if (books.length > 0) {
         selectBook = books.filter(book => storedReadBookId.includes(book.id))
           
             if(sortCriteria === 'rating'){
                selectBook = selectBook.slice().sort((a, b)=> b.rating - a.rating)
             }
             if(sortCriteria === 'totalPages'){
                selectBook = selectBook.slice().sort((a, b) => b.totalPages - a.totalPages)
             }
             if(sortCriteria === 'yearOfPublishing'){
                selectBook = selectBook.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
             }

            setBookSelect(selectBook);
        }

    }, [books, sortCriteria])
    return (
        <div>
            {
                bookSelect.map(bookCard => <BookCard key={bookCard.id} bookCard={bookCard}></BookCard>)
            }
        </div>
    );
};



ReadBooks.propTypes = {
    sortCriteria: PropTypes.object
}


export default ReadBooks;