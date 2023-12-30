import { MdArrowOutward } from "react-icons/md";
import Navbar from "./navbar";
import screen from "../assets/p1.png"
import scrn from "../assets/p2.png"
import Footer from "./footer";
import RegistrationCore from "./RegistrationCore";


const Registration = () => {
    return(
        <>
        <img src={scrn} id="scrn"></img>
        <img src={screen} id="screen"></img>
            <Navbar/>
            <RegistrationCore/>
        <Footer/>
        </>
    )
}

export default Registration