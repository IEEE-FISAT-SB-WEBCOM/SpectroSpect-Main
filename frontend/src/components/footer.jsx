import footerLogo from "../assets/Frame.png"
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return(
        <div className="footerContainer">
            <br />
            <div className="w-full h-96 border flex items-center flex-col justify-center border-white">
               <h1 className="font-bold text-6xl mb-10">
                 Be a Sponsor?
                </h1>
                <button
                href="#_"
                className="relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Contact
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
            </div>
            <div className="footerBoxContainer">
                <div className="footer-Box" id="fb1">
                <img
          className="ezgif"
          src="src\assets\ezgif.gif"  // Update the path to your GIF file
          alt="Ezgif"
        />
                </div>
                <div className="footer-Box text-3xl" id="fb2">
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FaInstagram /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FiMail /></a>
                </div>
                <div className="footer-Box" id="fb3">
                <div className="footer-slide">
                  <div>
                    <p>Our Sponsors</p>
                  </div>
                  <div></div>
                  <div>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FaInstagram /></a>
                    <a className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FiMail /></a>
                  </div>
                  </div>
                    {/* <a className="Header-Footer-slider-icons"><MdFacebook /></a>
                    <a className="Header-Footer-slider-icons"><MdFacebook /></a>
                    <a className="Header-Footer-slider-icons"><MdFacebook /></a>
                    <a className="Header-Footer-slider-icons"><MdFacebook /></a>
                    <a className="Header-Footer-slider-icons"><MdFacebook /></a>
                    <a className="Header-Footer-slider-icons"><MdFacebook /></a>
                    <a className="Header-Footer-slider-icons"><MdFacebook /></a> */}
                </div>
            </div>
            <img src={footerLogo}></img>
        </div>
    )
}

export default Footer