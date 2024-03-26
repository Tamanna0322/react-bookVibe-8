import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const parseId = parseInt(id);
    const book = books.find(book => book.id === parseId);
    console.log(book);
    return (
        <div className="flex justify-between mt-16 mb-8">
            <div className="w-[42%] p-20 rounded-2xl bg-slate-200">
                <img className="w-full h-[500px]" src={book.image} alt="" />
            </div>
            <div className="w-[53%]">
                <h3 className="text-5xl font-semibold text-black">{book.bookName}</h3>
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
                    <button className="btn text-[#23BE0A] font-extrabold border px-6 py-3 border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white">Read</button>
                    <button className="btn text-[#50B1C9] font-extrabold border border-[#50B1C9] rounded-lg px-6 py-3 hover:bg-[#50B1C9] hover:text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;