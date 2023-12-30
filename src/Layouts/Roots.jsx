import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import CallAnyTime from "../Components/CallAnyTime/CallAnyTime";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-bgBlueGray">
            <Outlet/>

            <div className="max-w-[1200px] mx-auto py-5 px-3  xl:px-0">
                <CallAnyTime/>
            </div>
            
            </div>
            <Footer/>
        </div>
    );
};

export default Roots;