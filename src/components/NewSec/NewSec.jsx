import { useLoaderData } from "react-router-dom";
import ChildBooks from "../ChildBooks/ChildBooks";


const NewSec = () => {
    const child = useLoaderData();

    return (
        <div className="md:mt-20 mt-10">
            <div className="md:text-4xl text-2xl font-bold border-b-2 border-dotted text-black border-green-600">
                <h3 className="text-center mb-5 text-[#1C661C]">Discover New Worlds: Books for Young Readers</h3>
            </div>
               
           <div>
            {
                child.map(child => <ChildBooks key={child.id} child={child}></ChildBooks>)
            }
           </div>



        </div>
    );
};

export default NewSec;