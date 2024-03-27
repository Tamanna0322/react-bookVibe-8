import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiBookBookmark } from "react-icons/pi";
import { Link } from 'react-router-dom';

const BookCard = ({ bookCard }) => {

    const {id, image, tags, bookName, author, category, rating, yearOfPublishing, publisher, totalPages } = bookCard;
    // console.log(id);
    return (
        <div className='mt-7'>
            <div className='flex justify-between border p-5 rounded-xl'>
                <div className='w-[23%] bg-slate-100 p-12 rounded-xl flex items-center'>
                    <img className='w-full rounded-lg h-[250px]' src={image} alt="" />
                </div>
                <div className='w-[74%]'>
                    <h3 className='text-4xl mb-5 font-bold text-black'>{bookName}</h3>
                    <p className='text-black'><span className='font-bold'>By:</span> {author}</p>
                    <div className='mt-8 mb-6 flex items-center space-x-8 text-[#23BE0A] font-bold'>
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
                    <div className='mt-5 flex space-x-6'>
                        <div className='text-[#328EFF] font-bold bg-[#328EFF26] py-3 rounded-3xl px-5'>Category: {category}</div>
                        <div className='text-[#FFAC33] font-bold bg-[#FFAC3326] py-3 rounded-3xl px-5'>Rating: {rating}</div>
                        <Link to={`/book/${id}`}  className="btn bg-[#23BE0A] md:px-5 md:py-3 rounded-3xl text-white">View Details</Link >
                         
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