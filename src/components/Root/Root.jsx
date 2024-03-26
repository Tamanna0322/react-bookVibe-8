import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto md:mt-6 mt-3">
            <div>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;