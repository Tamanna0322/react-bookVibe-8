import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
       <div className="flex justify-center items-center min-h-screen">
         <div className="text-center">
            <h2 className="text-5xl font-bold text-blue-950">OOPS!!!</h2>
            <p className="my-7 text-xl font-bold text-black">Error 404 : Page Not Found</p>
            <NavLink to='/' className="bg-[#23BE0A] text-white px-5 py-3 rounded-lg">Go To HomePage</NavLink>
        </div>
       </div>
    );
};

export default ErrorPage;