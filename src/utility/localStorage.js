import { toast } from "react-toastify";

const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}


const saveBooks = id =>{
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
         toast.success("Added to the Read List", {
            position: "top-right"
          });
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
}

export {getStoredBooks, saveBooks};