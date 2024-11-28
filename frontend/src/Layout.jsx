import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const Layout = () => (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
)