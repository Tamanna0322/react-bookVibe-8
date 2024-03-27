import { Link } from 'react-router-dom';
import image from '../../assets/book1.jpg';
import AllBooks from '../AllBooks/AllBooks';

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-[560px] mt-8 rounded-2xl">
                <div className="hero-content w-full md:flex flex-col justify-around lg:flex-row-reverse">
                    <div className='md:w-60 w-40'>
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full" />
                    </div>
                    <div className="md:w-[49%] w-[90%] md:space-y-14 space-y-10 text-black">
                        <h1 className="md:text-6xl text-3xl font-bold">Books to freshen up your bookshelf</h1>
                        <Link to="/books"  className="btn bg-[#23BE0A] md:px-5 md:py-3 text-white">View The List</Link >
                    </div>
                </div>
            </div>
            <div>
                <AllBooks></AllBooks>
            </div>
        </div>
    );
};

export default Home;