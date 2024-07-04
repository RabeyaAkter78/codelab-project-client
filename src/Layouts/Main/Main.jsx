import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/NavBar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-screen-xl px-10 mx-auto">
            <Navbar></Navbar>
           <Outlet ></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;