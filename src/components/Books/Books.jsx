
import { Link} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";


const Books = () => {
    
    const [tabIndex, setTabIndex] = useState(0);
    const [sortCriteria, setSortCriteria] = useState(null);
    


    const handleSort = criteria =>{
        console.log(criteria);
        setSortCriteria(criteria);
    
    } 
    

    return (
        <div className="">
            <div className="bg-slate-200 mt-9 rounded-md py-5">
                <h3 className="text-3xl font-bold text-center">Books</h3>
            </div>
           <div className="flex justify-center mt-6">
           <details className="dropdown ">
                <summary className="m-1 btn bg-[#23BE0A] md:px-5 md:py-3 text-white">Sort By
                <RiArrowDropDownLine className="text-2xl"></RiArrowDropDownLine>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><button onClick={() => handleSort('rating')}>Rating</button></li>
                    <li><button onClick={() => handleSort('totalPages')}>Number of Pages</button></li>
                    <li><button onClick={() => handleSort('yearOfPublishing')}>Publisher Year</button></li>
                </ul>
            </details>
           </div>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:text-gray-800 mt-10">
                <Link
                    to=""
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span className="font-bold">Read Books</span>
                </Link>

                <Link
                    to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0" : "border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span className="font-bold">Wishlist Books</span>
                </Link>

            </div>
               { tabIndex == 0 && <ReadBooks sortCriteria={sortCriteria}></ReadBooks>}
           { tabIndex == 1 && <Wishlist></Wishlist>}
         
        </div>
    );
};

export default Books;