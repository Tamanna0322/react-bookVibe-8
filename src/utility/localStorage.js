
const getStoredBooks = (key) =>{
    const storedBooks = localStorage.getItem(key);
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveToLocal = (key, id) =>{
    const storedData = getStoredBooks(key);
    const exist = storedData.find(DataId => DataId === id);
    if(!exist){
        storedData.push(id);
        localStorage.setItem(key, JSON.stringify(storedData))
    }
}

const getReadBooks = () =>{
    return getStoredBooks("readBooks");
}

const saveReadBooks = id =>{
    saveToLocal('readBooks', id);
}

const getWishlist = () =>{
    return getStoredBooks('wishlist');
}

const saveWishlist = id =>{
    saveToLocal('wishlist', id);
}

export {getReadBooks, saveReadBooks, getWishlist, saveWishlist, getStoredBooks};







