import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiBookBookmark } from "react-icons/pi";
import { Link } from 'react-router-dom';

const BookCard = ({ bookCard }) => {
    // console.log(bookCard)

    const {id, image, tags, bookName, author, category, rating, yearOfPublishing, publisher, totalPages } = bookCard;
    return (
        <div className='mt-7'>
            <div className='flex flex-col md:flex-row justify-between border p-5 rounded-xl'>
                <div className='md:w-[23%] bg-slate-100 md:p-12 p-14 rounded-xl flex items-center'>
                    <img className='w-full rounded-lg md:h-[250px] ' src={image} alt="" />
                </div>
                <div className='md:w-[74%]'>
                    <h3 className='md:text-4xl text-3xl mb-5 font-bold text-black'>{bookName}</h3>
                    <p className='text-black'><span className='font-bold'>By:</span> {author}</p>
                    <div className='mt-8 mb-6 flex items-center space-x-4 md:space-x-8 text-[#23BE0A] font-bold'>
                        <h3 className="text-black font-bold">Tag</h3>
                        {
                            tags.map((tag, idx) => <p key={idx}>#{tag}</p>)
                        }
                    </div>
                    <div className='flex items-center gap-2 font-bold'>
                        <CiLocationOn className='text-2xl'></CiLocationOn>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className='flex items-center mt-6 mb-5 gap-2 text-gray-600 font-bold'>
                        <HiOutlineUsers className='text-xl'></HiOutlineUsers>
                        <p>Publisher: {publisher}</p>
                        <PiBookBookmark className='text-xl ml-6'></PiBookBookmark>
                        <p>Pages: {totalPages}</p>
                    </div>
                    <hr />
                    <div className='mt-5 flex md:space-x-6 space-x-3 items-center'>
                        <div className='text-[#328EFF] font-bold bg-[#328EFF26] py-3 rounded-3xl md:px-5 px-2 text-center'>Category: {category}</div>
                        <div className='text-[#FFAC33] font-bold bg-[#FFAC3326] py-3 rounded-3xl text-center md:px-5 px-2'>Rating: {rating}</div>
                        <div>
                        <Link to={`/book/${id}`}  className="btn bg-[#23BE0A] md:px-5 md:py-3 rounded-3xl text-white">View Details</Link >
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};


BookCard.propTypes = {
    bookCard: PropTypes.object
}

export default BookCard;