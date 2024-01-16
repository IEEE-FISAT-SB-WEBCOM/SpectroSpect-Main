import Navbar from "./navbar"
import Footer from "./footer"
import Workshop2 from "../Workshop2"
import screen from "../assets/p1.png"
import scrn from "../assets/p2.png"
import { MdArrowOutward } from "react-icons/md";


const WorkshopMain = () => {
    return(
        <>
            <img src={scrn} id="scrn"></img>
            <img src={screen} id="screen"></img>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            
            <div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="Workshops">
        <div className="md:w-3/4 flex flex-col  md:mt-32 lg:mr-8 px-3 py-3">
        <div className="flex text-3xl font-bold align-middle self-start items-center mb-10" id="WorkshopIntelandingPg">
            <MdArrowOutward className="text-green-400 text-5xl mr-3" />
            Workshops
          </div>
             <Workshop2/>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default WorkshopMain