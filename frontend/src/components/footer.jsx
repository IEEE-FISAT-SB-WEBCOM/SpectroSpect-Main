import footerLogo from "../assets/Frame.png"
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { useEffect } from "react";
import spectroLogo from "../assets/ezgif.gif"
import SP1 from "../assets/Frame 811755.png"
import SP2 from "../assets/Frame 811754.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const mobFooterContainer = {
      flexDirection:"column",
      height:"70vh",
      width:"90%",
      margin:"5%"
    }

    const mobFooterContainerDiv = {
      height:"30%",
      width:"100%"
    }
    let condition = window.innerHeight > window.innerWidth

    useEffect(()=>{

      gsap.fromTo("#BeASponsor",{
        opacity:0,
      },{
        opacity:1,
        duration:4,
        scrollTrigger:{trigger:"#BeASponsor",toggleActions:"restart none none none"}
      })
      
      gsap.fromTo("#BeASponsor h1",{
        opacity:0,
        y:-100
      },{opacity:1,
        y:0,
        duration:2,
        scrollTrigger:{trigger:"#BeASponsor",toggleActions:"restart none none none"}
      })

      gsap.fromTo(".footerBoxContainer div",{
        opacity:0,
      },{opacity:1,
        duration:2,
        stagger:0.5,
        scrollTrigger:{trigger:".footerBoxContainer div",toggleActions:"restart none none none"}
      })
    },[])

    

    return(
        <div className="footerContainer">
            <br />
            <div className="w-full border flex items-center flex-col justify-center border-white" id="BeASponsor">
               <h1 className="font-bold text-6xl mb-10">
                 Be a Sponsor?
                </h1>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fisatieeesb@gmail.com&body">
                <button
                className="relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group" id="BeASponsorB"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Contact
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
              </a>
            </div>
            <div className="footerBoxContainer" style={condition ? mobFooterContainer : null}>
                <div className="footer-Box" id="fb1" style={condition ? {...mobFooterContainerDiv,borderBottomLeftRadius:"0px",borderTopRightRadius:"10px"} : null}>
                <img
          className="ezgif"
          src={spectroLogo}  // Update the path to your GIF file
          alt="Ezgif"
        />
                </div>
                <div className="footer-Box text-3xl" id="fb2" style={condition ? mobFooterContainerDiv : null}>
                    <a href="https://www.facebook.com/ieeefisat/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a>
                    <a href="https://www.instagram.com/ieeefisatsb/?hl=en" className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FaInstagram /></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fisatieeesb@gmail.com&body" className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><FiMail /></a>
                </div>
                <div className="footer-Box" id="fb3" style={condition ? {...mobFooterContainerDiv,borderTopRightRadius:"0px",borderBottomLeftRadius:"10px"} : null}>
                  <div id="footer-slider-1">
                    Our<br/> Sponsors
                  </div>
                  <div id="footer-slider-2"></div>
                  <div id="footer-slider-3">
                    <a href="https://nuevoue.com/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><img src={SP1}></img></a>
                    <a href="https://visavalley.com/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500"><img src={SP2}></img></a>
                    {/* <a href="https://www.facebook.com/ieeefisat/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><BsFillQuestionCircleFill /></a> */}
                    {/* <a href="https://www.facebook.com/ieeefisat/" className="hover:cursor-pointer hover:text-gray-400 transition duration-500 "><MdFacebook /></a> */}
                  </div>
                  <div className="footer-slider-common">Workshops <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">Talks <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">Pro Show <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                  <div className="footer-slider-common">More Fun <MdArrowOutward className="text-green-400 text-5xl mr-3" /></div>
                </div>
            </div>
            <img src={footerLogo}></img>
            <div>
              <div class="copyright" id="credit">
                &copy; Copyright <strong><span>IEEE FISAT SB</span></strong>. All Rights Reserved
              </div>
              <div class="credits" id="creditt">
                Designed with Love 💞 <a href="https://www.ieee.fisat.ac.in/SpectroSpectwebteam" id="web" style={{textDecoration:"underline"}}>SpectroSpect WebTeam</a>
              </div>
            </div>
        </div>
    )
}

export default Footer
