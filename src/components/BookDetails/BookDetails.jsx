import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBooks, saveBooks, saveWish } from "../../utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const parseId = parseInt(id);
    const book = books.find(book => book.id === parseId);
    // console.log(book);

    const handleReadBtn = () =>{
       saveBooks(id);
        toast.success("Added to the Read List", {
            position: "top-right"
          });
        
       
          
    }

    const handleWishlistBtn = (id) =>{

          const data = getStoredBooks();
        //   console.log(data, id);

          if(data.includes(id)){
               toast.error("Error Notification !", {
            position: "top-right"
          });
          }
          else{
            saveWish(id);
            toast.success("Added to the wishList", {
                            position: "top-right"
                          });
          }
    }

    return (
        <div className="flex flex-col md:flex-row justify-between md:mt-16 mt-8 mb-8 mx-4">
            <div className="md:w-[42%] p-20 rounded-2xl bg-slate-100">
                <img className="w-full md:h-[500px]" src={book.image} alt="" />
            </div>
            <div className="md:w-[53%]">
                <h3 className="md:text-5xl text-3xl font-semibold text-black">{book.bookName}</h3>
                <p className="mt-5 text-xl mb-4">By: {book.author}</p>
                <hr />
                <p className="my-4 text-xl">{book.category}</p>
                <hr />
                <p className="mt-8"><span className="text-black font-bold">Review:</span> {book.review}</p>
                <div className='mt-8 mb-6 flex items-center space-x-8 text-[#23BE0A] font-bold'>
                    <h3 className="text-black font-bold">Tag</h3>
                    {
                        book.tags.map((tag, idx) => <p key={idx}>#{tag}</p>)
                    }
                </div>
                <hr />
                <div className="flex mt-6 text-black">
                    <div className="space-y-4">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="ml-16 space-y-4 text-black font-bold">
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
                <div className="mt-10 space-x-10">
                    <button onClick={handleReadBtn} className="btn text-[#23BE0A] font-extrabold border px-6 py-3 border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white">Read</button>
                    <button onClick={() => handleWishlistBtn(id)} className="btn text-[#50B1C9] font-extrabold border border-[#50B1C9] rounded-lg px-6 py-3 hover:bg-[#50B1C9] hover:text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;