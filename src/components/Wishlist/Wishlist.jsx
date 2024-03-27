import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlist } from "../../utility/localStorage";
import WishlistBooks from "../WishlistBooks/WishlistBooks";


const Wishlist = () => {
     const wishlist = useLoaderData();
     const [wishSelect, setWishSelect] = useState([]);

     useEffect(() => {
        const storedWishBookId = getWishlist();
        if(wishlist.length > 0){
            const selectWish = wishlist.filter(wish => storedWishBookId.includes(wish.id))
            setWishSelect(selectWish);
        }
     },[])
    return (
        <div>
            {
                wishSelect.map(wishlistBooks => <WishlistBooks key={wishlistBooks.id} wishlistBooks={wishlistBooks}></WishlistBooks>)
            }
        </div>
    );
};

export default Wishlist;