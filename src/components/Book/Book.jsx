import PropTypes from 'prop-types'; 
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {id, image, tags, bookName, author, category, rating} = book
   
    
    return (
        <Link to={`/book/${id}`} className="border p-4 rounded-lg">
            <div className=" bg-slate-200 flex h-[200px] justify-center rounded-lg">
                <img className="w-[150px] h-full p-5 object-cover" src={image} alt="" />
            </div>
            <div className='mt-4 flex justify-around text-[#23BE0A] font-bold'>
               {
                  tags.map((tag, idx) => <p key={idx}>{tag}</p>)
               }
            </div>
            <h3 className="text-2xl font-bold text-black mt-3">{bookName}</h3>
            <p className="mt-2 text-black mb-3">By: {author}</p>
            <hr />
            <div className="flex mt-3 justify-between text-black">
                <p>{category}</p>
                <p className='flex items-center'>{rating} <FaRegStar className='ml-3'></FaRegStar> </p>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;