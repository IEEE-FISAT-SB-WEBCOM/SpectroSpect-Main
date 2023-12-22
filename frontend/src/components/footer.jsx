import footerLogo from "../assets/Frame.png"
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return(
        <div className="footerContainer">
            <br />
            <div className="footerBeASponsor">
                
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
                    Our Sponsors
                </div>
            </div>
            <img src={footerLogo}></img>
        </div>
    )
}

export default Footer