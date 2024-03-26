import PropTypes from 'prop-types'; 

const Book = ({ book }) => {
    console.log(book)
    return (
        <div className="border p-4 rounded-lg">
            <div className=" bg-slate-200 flex h-[200px] justify-center rounded-lg">
                <img className="w-[150px] h-full p-5 object-cover" src="https://i.ibb.co/pXGY8rT/large-50c05cfba09243d8b05a251e2205c6ec.jpg" alt="" />
            </div>
            <div>
                <h3 className="mt-4">Tags</h3>
            </div>
            <h3 className="text-2xl text-black mt-3">The cather in the eye</h3>
            <p className="mt-2 mb-3">By: Anwar Hossain</p>
            <hr />
            <div className="flex mt-3 justify-between">
                <p>Fiction</p>
                <p>Rating</p>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;