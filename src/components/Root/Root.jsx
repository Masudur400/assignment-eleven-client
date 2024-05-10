import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

 
const Root = () => {
    return (
        <div className="font-lato">
             <NavBar></NavBar>
            <div className="container mx-auto px-4 md:px-9 min-h-[calc(100vh-250px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;