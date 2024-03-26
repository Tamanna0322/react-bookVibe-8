
const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveWish = id =>{
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
}

const saveBooks = id =>{
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
   
}

export {getStoredBooks, saveBooks, saveWish};