import PropTypes from 'prop-types';

const ChildBooks = ({child}) => {
    const { image, tags, bookName, author, category, rating, review } = child;

    return (
        <div className='mt-10'>
            <div className='flex flex-col md:flex-row justify-between border border-green-500 p-5 rounded-xl'>
              <div className='md:w-[23%] bg-green-50 md:p-12 p-14 rounded-xl flex items-center'>
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
                    <hr />
                    <div className='mt-6'>
                        <p className='text-black'><span className='font-bold'>Review:</span> {review}</p>
                    </div>
                    <div className='mt-5 flex md:space-x-6 space-x-3 items-center'>
                        <div className='text-[#23BE0A] font-bold bg-[#23BE0A1F] py-3 rounded-3xl md:px-5 px-2 text-center'>Category: {category}</div>
                        <div className='text-[#328EFF] font-bold bg-[#23BE0A1F] py-3 rounded-3xl text-center md:px-5 px-2'>Rating: {rating}</div>
                       
                    </div>
              </div>
            </div>
        </div>
    );
};


ChildBooks.propTypes = {
    child: PropTypes.object
}

export default ChildBooks;