import { NavLink } from 'react-router-dom';
import library from '../../assets/library.jpg';

const About = () => {
    return (
        <div className='mt-10'>
            <div className="lg:mt-10 mt-5 mx-3 flex justify-center items-center text-center bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${library})`}}>
            <div className="lg:w-[70%] w-[93%] mx-auto lg:space-y-8 space-y-4">
                <h2 className="lg:text-5xl text-2xl text-white font-bold">About Us</h2>
                <p className="text-white ">At BookVibe, we are dedicated to fostering a love of reading for all ages. Our diverse collection spans from childrens classics to gripping novels for adults, ensuring there is something for everyone. Whether you are a young reader exploring magical worlds or an adult seeking captivating stories, we invite you to embark on a literary journey with us.</p>
                <div className="mt-10">
                   
                <NavLink to='/' className="bg-[#23BE0A] text-white px-5 py-3 rounded-lg">HomePage</NavLink>
                </div>
               </div>
            </div>
        </div>
    );
};

export default About;