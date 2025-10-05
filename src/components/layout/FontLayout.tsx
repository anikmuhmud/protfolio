import Footer from "@/components/footar/footer";
import Navbar1 from "@/components/navbar-01/navbar-01";
import { Outlet } from "react-router";

function FontLayout() {
    return ( 
        <>  
        <Navbar1 />
        <Outlet/>
        <Footer/>
        </>
     );
}

export default FontLayout;