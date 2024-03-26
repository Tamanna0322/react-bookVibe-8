import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       
                        <NavLink to='/' className={({isActive}) => isActive ? 'text-green-600 font-bold hover:bg-green-600 hover:text-white' : 'font-semibold' }>Home</NavLink>
                        <NavLink to='/books' className={({isActive}) => isActive ? 'text-green-600 font-bold hover:bg-green-600 hover:text-white' : 'font-semibold' }>Listed Books</NavLink>
                        <NavLink to='/read' className={({isActive}) => isActive ? 'text-green-600 font-bold hover:bg-green-600 hover:text-white' : 'font-semibold' }>Pages to Read</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
               <div className="flex space-x-14 items-center">
               <NavLink to='/' className={({isActive}) => isActive ? 'text-green-600 font-bold border border-green-600 rounded-lg px-3 py-2 hover:bg-green-600 hover:text-white' : 'font-semibold' }>Home</NavLink>
                <NavLink to='/books' className={({isActive}) => isActive ? 'text-green-600 font-bold border border-green-600 rounded-lg px-3 py-2 hover:bg-green-600 hover:text-white' : 'font-semibold' }>Listed Books</NavLink>
                <NavLink to='/read' className={({isActive}) => isActive ? 'text-green-600 font-bold border border-green-600 rounded-lg px-3 py-2 hover:bg-green-600 hover:text-white' : 'font-semibold' }>Pages to Read</NavLink>
               </div>
                </ul>
            </div>
            <div className="navbar-end space-x-4 hidden md:flex">
                <a className="btn bg-green-500 text-white">Sign In</a>
                <a className="btn bg-sky-400 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;