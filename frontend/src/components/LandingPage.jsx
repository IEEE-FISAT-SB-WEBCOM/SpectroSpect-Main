import { Link } from "react-router-dom";
import Footer from "./footer";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { Tilt } from "react-tilt";
import footerLogo from "../assets/Frame.png"
import screen from "../assets/p1.png"
import scrn from "../assets/p2.png"
import { FaArrowDownLong } from "react-icons/fa6";
import Workshop2 from "../Workshop2";
import { useEffect } from "react";
import Navbar from "./navbar";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import ThreeJSGlobe from "../Three/spectrospect";
import post from "./wrkData";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import 'firebase/compat/database'
import validator from "email-validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animate, motion, useAnimation } from "framer-motion";
import RAS from "../assets/wie-logo@2x.png"
import WIE from "../assets/wie-logo_white.png"
import SPS from "../assets/SPS_Logo_Color_RGB.png"
import COM from "../assets/ieee-comsoc_white.png"
import pdf from '../assets/SPECTROSPECT.pdf'
import globee from "../assets/globevid-unscreen.gif"
import pes from '../assets/pes_white.png'
import cs from '../assets/cs.png'
import RegistrationCore from "./RegistrationCore";
import './navbar.css';


// useEffect(async () =>{
//   <ThreeJSGlobe/>
// })



const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            25,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const LandingPage = () => {
  

  const Anim = {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "easeIn", // You can use other transition types like "tween", "easeInOut", etc.
        ease: "easeInOut",
        duration:1,
      },
    },
  };
  // const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_APIKEY,
  //   authDomain: import.meta.env.VITE_AUTHDOMAIN,
  //   databaseURL: import.meta.env.VITE_DATABASEURL,
  //   projectId: import.meta.env.VITE_PROJECTID,
  //   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  //   messagingSenderId: import.meta.env.VITE_MSID,
  //   appId: import.meta.env.VITE_APPID,
  //   measurementId: import.meta.env.VITE_MEASUREMENTID
  // };
  // firebase.initializeApp(firebaseConfig);
  
  // const dataref= firebase.database();

  const [email, setemail] = useState('');
  const handleClick=()=>{
    if(email===''){
      toast.warn('Enter Email Address', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });    }else{

    
    if(validator.validate(email)){

      dataref.ref("mails").push(
        {
          mail:email,
        }
        ).catch((error)=>{
          toast.error('Unexpected Error', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
        setemail('');
        toast.success('Stay tuned for updates.', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else{
        toast.error('Invalid Email address', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
  }}
  
 
    const [workshops, setworkshops] = useState([
        {
            key:1,
            title:"Workshop 1",
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestiae animi corporis perspiciatis, laudantium magnam, inventore minima provident voluptatem repellendus aperiam. Repellat enim ducimus, accusamus neque adipisci sint quae numquam?",
            isOpen:false
        },
        {
            key:1,
            title:"Workshop 2",
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestiae animi corporis perspiciatis, laudantium magnam, inventore minima provident voluptatem repellendus aperiam. Repellat enim ducimus, accusamus neque adipisci sint quae numquam?",
            isOpen:false
        },
        
        {
            key:1,
            title:"Workshop 3",
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestiae animi corporis perspiciatis, laudantium magnam, inventore minima provident voluptatem repellendus aperiam. Repellat enim ducimus, accusamus neque adipisci sint quae numquam?",
            isOpen:false
        },
        
    ])

    const toggle = (wrkKey)=>{
        const update=workshops.map((workshop)=>{
            if (workshop.key === wrkKey) { 
                return { ...workshop, isOpen: !workshop.isOpen }; 
            } else { 
                return { ...workshop, isOpen: false }; 
            } 
        });
        setworkshops(update);
    }

    useEffect(() => {
      gsap.fromTo("#about div div div div",{
        opacity:0,
        x:-200
      },{opacity:1,
        x:0,
        duration:2,
        scrollTrigger:{trigger:"#about",toggleActions:"restart none restart none"}
      })
      
      gsap.fromTo("#broSure",{
        opacity:0,
        y:100,
        scale:0
      },{opacity:1,
        delay:1,
        y:0,
        duration:2,
        scale:1,
        scrollTrigger:{trigger:"#about",toggleActions:"restart none restart none"}
      })

      gsap.fromTo("#IEEE_LOGOS",{
        opacity:0,
        x:500
      },{opacity:1,
        x:0,
        duration:2,
        stagger:0.2,
        scrollTrigger:{trigger:"#about",toggleActions:"restart none restart none"}
      })

      gsap.fromTo("#WorkshopIntelandingPg",{
        opacity:0,
        scale:0.5,
        x:-200,
      },{
        opacity:1,
        duration:3,
        stagger:0.5,
        scale:1,
        x:0,
        scrollTrigger:{trigger:"#Workshops",toggleActions:"restart none restart none"}
      })
  
    },[])
    

  return (
    <>
  <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
<img src={scrn} id="scrn"></img>
<img src={screen} id="screen"></img>
    <Navbar setSticky={true}/>
 
      {/* <h1>SPECTROSPECT🪫🔌</h1>
            <button>
                <Link to="/Workshops">Workshops</Link>
            </button>
            <br/>

            <button>
                <Link to="/Speakers">Speakers</Link>
            </button>
            <br/>

            <button>
                <Link to="/Events">Events</Link>
            </button> */}
        
<div className="flex flex-col z-0  items-center min-w-full justify-center">
<img className="h-[600px] hidden md:flex  mt-36" src={globee} ></img>
<div id="spt" className="w-full sm:static md:absolute pb-40 flex bg-opacity-100 md:bg-gradient-to-b from-transparent to-black  translate-y-28 md:translate-y-52 items-center align-middle justify-center">

<h1 className="text-[42px] md:text-[12rem]">SpectroSpect</h1>
<MdArrowOutward className="text-green-400 text-[42px] md:text-[12rem] mr-3" />
</div>
</div>



<img src={footerLogo} className="mt-20"></img>




<div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="about">
        <div className="md:w-3/4 flex flex-col  md:mt-32 lg:mr-8 px-3 py-3">
            <div className="w-full flex flex-col md:flex-row ">
                <div className="flex w-full md:w-4/6 flex-col">
                
                <div className=" text-xl md:text-3xl">
                "Spectrospect is a tech symposium spotlighting signal processing’s forefront.Engage in workshops, discussions, and competitions led by industry experts.Explore digital, audio, and visual processing, machine learning ,and emerging tech. Connect with innovators, showcase your skills,and dive into the pulse of technological evolution."
                
                </div>
                <div className=" flex md:mb-0 mb-10 ">
                  <a         href={pdf}
                    download="SpectroSpect"
                    target="_blank"
                    rel="noreferrer"
>
                <button
                href="#_"
                className="relative mt-10 inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group" id="broSure"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full flex items-center text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                <FaArrowDownLong className="" />Brochure
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button></a>
                </div>
                </div>

              <div className="grid items-start md:gap-0 sm:gap-5 gap-y-28 mt-10 md:mt-0 md:pl-10 justify-center align-middle grid-cols-1 md:grid-cols-2 grid-rows-3 w-full md:px-0 pl-20  md:w-2/6 min-h-full text-black" id="IEEE_LOGOS">
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                <img src={SPS}></img>
              </div>
              <div className="w-2/3  flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                <img src={cs}></img>
              </div>
              <div className="w-2/3 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                <img src={RAS}></img>
              </div>
              <div className="w-2/3  flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                <img src={pes}></img>
              </div>
              <div className="w-2/3  flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                <img src={WIE}></img>
              </div>
              <div className="w-2/3  flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                <img src={COM}></img>
              </div>

              </div>
            </div>
            </div>
            </div>

  <div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="Workshops">
        <div className="md:w-3/4 flex flex-col  md:mt-32 lg:mr-8 px-3 py-3">
        <div className="flex text-3xl font-bold align-middle self-start items-center mb-10" id="WorkshopIntelandingPg">
            <MdArrowOutward className="text-green-400 text-5xl mr-3" />
            Workshops
          </div>
             <Workshop2/>
            </div>
            </div>




      {/* Speaker Section */}
      <div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="Speakersss">
        <div className="md:w-3/4 flex w-full flex-col  md:mt-32 lg:mr-8 px-3 py-3">
          <div className="flex w-full text-3xl font-bold align-middle self-start items-center" id="SpeakerIntelandingPg">
            <MdArrowOutward className="text-green-400 sm:self-center text-5xl mr-3" />
            Speakers
          </div>

         <div className="flex mt-10 w-full md:flex-row space-x-0  md:space-x-5 flex-col" >
            {/* Speaker */}

{post.slice(0,4).map((item,i)=>{
  return(

 
            <motion.div className=" md:w-1/4 w-full"
   initial={{ opacity: 0, x: 100 }}
   whileInView={{ opacity: 1, x: 0 }}
   exit={{ opacity: 0, x: 0 }}
   transition={{ duration: 1,delay:i*0.3}}
   whileHover={{
     scale: 1,
     transition: { duration: 0.5, delay: 0 },
   }}
 >
 <div  className=" w-full hover:cursor-pointer  hover:scale-105 transition duration-300"  >
              <div href="#" className="block rounded-lg p-4">
                <img
                  alt="Home"
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="font-medium">Marine Gwenddydd</dd>
                      <div>
                        <dd className="text-sm text-gray-500">Managing Director</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
       </motion.div>
 )
})}

          </div>        

          <Link to="/Speakers">
          <div className="mt-10 hover:bg-white hover:text-black font-bold transition duration-700 hover:cursor-pointer flex items-center w-full justify-center border border-gray-600 p-2 rounded-3xl" id="SpeakerIntelandingPgButton">View all
          <MdArrowOutward className="text-green-400 text-2xl ml-3 mr-3" />
          </div>
          </Link>
        </div>
      </div>






      {/* Insta */}
  <div className="flex flex-col lg:flex-row bg-black text-white items-center justify-center" >
    <div className="md:w-full lg:w-3/4 flex flex-col md:mt-32 lg:mr-8 px-3 py-3">
      <div className="flex text-3xl mb-10 font-bold align-middle self-start items-center" >
        <MdArrowOutward className="text-green-400 text-5xl mr-3" />
          Latest Update
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
{post.slice(0,4).map((item,index)=>(
   <motion.div
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: -50 }}
   transition={{ duration: 0.5, delay: index * 0.3 }}
   whileHover={{
     scale: 1,
     transition: { duration: 0.5, delay: 0 },
   }}
 >

      <Tilt options={defaultOptions}  className="hover:cursor-pointer mb-4 md:mb-0">
      
<article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src={item.img}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <p  className="block text-xs font-bold text-white/90"> {"12-5-23"} </p>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">{item.Event}</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
       {item.Caption}
      </p>
    </div>
  </div>
</article>
      </Tilt>
      </motion.div>))}



    </div>

    <Link to="/Events">
      <div className="my-10 hover:bg-white hover:text-black font-bold transition duration-600 hover:cursor-pointer flex items-center w-full justify-center border border-gray-700 p-2 rounded-3xl" id="InstaIntelandingPageButton">
        View all
        <MdArrowOutward className="text-green-400 text-2xl ml-3 mr-3" />
      </div>
    </Link>
  </div>
</div>
<RegistrationCore/>

<div className="w-full flex flex-col items-center align-middle mt-16">
<div className="h-1/2">
<div>
<svg width="500" height="562" viewBox="0 0 648 562" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_656_6651)">
<path d="M79.9361 464.544C64.4634 464.544 50.7651 463.834 38.8413 462.414C26.9174 460.995 18.3293 459.575 13.0772 458.156V453.897L8.81863 431.114C10.8059 433.385 14.5676 435.799 20.1037 438.354C25.7818 440.909 33.3052 443.109 42.6739 444.954C52.0427 446.658 63.1858 447.509 76.1034 447.509C87.7434 447.509 96.5443 446.729 102.506 445.167C108.61 443.464 112.727 441.193 114.856 438.354C117.127 435.373 118.263 431.966 118.263 428.133C118.263 423.591 116.417 419.971 112.727 417.274C109.036 414.577 103.5 412.448 96.1185 410.886C88.879 409.183 79.8651 407.692 69.0768 406.415C55.0237 404.569 43.7386 402.156 35.2215 399.175C26.7045 396.052 20.5296 391.936 16.6969 386.825C12.8642 381.715 10.9479 375.256 10.9479 367.449C10.9479 360.777 12.9352 354.815 16.9098 349.563C21.0264 344.311 27.2013 340.195 35.4344 337.214C43.6676 334.091 54.172 332.529 66.9475 332.529C81.7104 332.529 94.557 333.239 105.487 334.658C116.417 336.078 124.154 337.497 128.696 338.917V343.176L135.084 362.339C132.103 360.494 127.49 358.577 121.244 356.59C115.14 354.603 107.758 352.97 99.0994 351.693C90.4404 350.273 80.7878 349.563 70.1414 349.563C61.3405 349.563 54.3139 350.202 49.0617 351.48C43.9515 352.757 40.2608 354.674 37.9896 357.229C35.8603 359.642 34.7957 362.623 34.7957 366.172C34.7957 370.856 36.4991 374.618 39.9059 377.457C43.4547 380.296 48.5649 382.496 55.2366 384.057C62.0502 385.619 70.2834 386.967 79.9361 388.103C95.2668 389.806 107.475 392.22 116.559 395.342C125.644 398.465 132.174 402.653 136.149 407.905C140.123 413.157 142.111 419.971 142.111 428.346C142.111 433.882 140.762 438.921 138.065 443.464C135.51 447.864 131.606 451.697 126.354 454.962C121.102 458.085 114.572 460.498 106.765 462.201C99.0994 463.763 90.1565 464.544 79.9361 464.544ZM218.42 464.544C194.004 464.544 176.332 458.724 165.401 447.084C154.613 435.302 149.219 418.906 149.219 397.898C149.219 384.412 151.561 372.843 156.245 363.191C161.072 353.396 168.524 345.873 178.603 340.62C188.823 335.226 202.096 332.529 218.42 332.529H225.021C241.061 332.529 254.05 335.155 263.986 340.407C274.065 345.66 281.446 353.183 286.131 362.978C290.815 372.772 293.157 384.412 293.157 397.898C293.157 418.906 287.763 435.302 276.975 447.084C266.186 458.724 248.868 464.544 225.021 464.544H218.42ZM220.549 447.297H222.891C233.538 447.297 242.268 445.735 249.081 442.612C255.895 439.489 260.934 434.379 264.199 427.281C267.606 420.042 269.309 410.247 269.309 397.898C269.309 385.832 267.606 376.321 264.199 369.365C260.792 362.268 255.682 357.229 248.868 354.248C242.055 351.125 233.396 349.563 222.891 349.563H220.549C209.903 349.563 201.031 351.125 193.933 354.248C186.978 357.371 181.726 362.481 178.177 369.578C174.77 376.676 173.067 386.116 173.067 397.898C173.067 410.105 174.77 419.829 178.177 427.069C181.726 434.308 187.049 439.489 194.146 442.612C201.244 445.735 210.045 447.297 220.549 447.297ZM370.44 464.544C346.024 464.544 328.351 458.724 317.421 447.084C306.633 435.302 301.239 418.906 301.239 397.898C301.239 384.412 303.581 372.843 308.265 363.191C313.092 353.396 320.544 345.873 330.622 340.62C340.843 335.226 354.115 332.529 370.44 332.529H377.04C393.081 332.529 406.069 335.155 416.006 340.407C426.084 345.66 433.466 353.183 438.15 362.978C442.835 372.772 445.177 384.412 445.177 397.898C445.177 418.906 439.783 435.302 428.994 447.084C418.206 458.724 400.888 464.544 377.04 464.544H370.44ZM372.569 447.297H374.911C385.557 447.297 394.287 445.735 401.101 442.612C407.915 439.489 412.954 434.379 416.219 427.281C419.626 420.042 421.329 410.247 421.329 397.898C421.329 385.832 419.626 376.321 416.219 369.365C412.812 362.268 407.702 357.229 400.888 354.248C394.075 351.125 385.416 349.563 374.911 349.563H372.569C361.923 349.563 353.051 351.125 345.953 354.248C338.998 357.371 333.745 362.481 330.197 369.578C326.79 376.676 325.086 386.116 325.086 397.898C325.086 410.105 326.79 419.829 330.197 427.069C333.745 434.308 339.069 439.489 346.166 442.612C353.264 445.735 362.065 447.297 372.569 447.297ZM456.452 462.414C457.446 462.414 458.44 461.421 459.433 459.433C460.427 457.446 460.924 454.181 460.924 449.639V347.434C460.924 342.892 460.427 339.698 459.433 337.852C458.44 335.865 457.446 334.8 456.452 334.658H489.456C489.314 335.084 489.811 336.362 490.946 338.491C492.224 340.62 494.495 343.743 497.76 347.86C498.754 349.137 500.812 351.693 503.935 355.525C507.2 359.358 511.245 364.113 516.072 369.791C520.898 375.327 526.079 381.431 531.615 388.103C537.293 394.633 542.971 401.304 548.649 408.118C554.469 414.79 560.005 421.178 565.258 427.281H565.683V347.434C565.683 342.892 565.187 339.698 564.193 337.852C563.199 335.865 562.206 334.8 561.212 334.658H594.003C593.009 334.658 592.015 335.652 591.022 337.639C590.028 339.627 589.531 342.963 589.531 347.647V449.639C589.531 454.181 590.028 457.446 591.022 459.433C592.015 461.421 593.009 462.414 594.003 462.414H566.109C566.251 461.988 565.683 460.711 564.406 458.582C563.128 456.31 560.857 453.187 557.592 449.213C555.463 446.516 552.34 442.754 548.224 437.928C544.249 432.959 539.706 427.352 534.596 421.107C529.486 414.719 524.021 408.047 518.201 401.091C512.523 394.136 506.845 387.18 501.167 380.225C495.631 373.269 490.378 366.81 485.41 360.848H484.771V449.639C484.771 454.181 485.268 457.446 486.262 459.433C487.256 461.421 488.249 462.414 489.243 462.414H456.452Z" fill="#121212"/>
</g>
<g clip-path="url(#clip1_656_6651)">
<path d="M87.7409 237.129C72.2682 237.129 58.5699 236.42 46.6461 235C34.7222 233.58 26.1342 232.161 20.882 230.741V226.483L16.6234 203.7C18.6108 205.971 22.3725 208.384 27.9085 210.939C33.5866 213.494 41.11 215.695 50.4787 217.54C59.8475 219.243 70.9907 220.095 83.9082 220.095C95.5482 220.095 104.349 219.314 110.311 217.753C116.415 216.05 120.532 213.778 122.661 210.939C124.932 207.958 126.068 204.552 126.068 200.719C126.068 196.176 124.222 192.557 120.532 189.86C116.841 187.163 111.305 185.033 103.923 183.472C96.6838 181.768 87.6699 180.278 76.8816 179C62.8285 177.155 51.5434 174.742 43.0263 171.761C34.5093 168.638 28.3344 164.521 24.5017 159.411C20.669 154.301 18.7527 147.842 18.7527 140.035C18.7527 133.363 20.74 127.401 24.7146 122.149C28.8312 116.897 35.0061 112.78 43.2392 109.799C51.4724 106.676 61.9768 105.115 74.7524 105.115C89.5153 105.115 102.362 105.825 113.292 107.244C124.222 108.664 131.959 110.083 136.501 111.503V115.761L142.889 134.925C139.908 133.079 135.294 131.163 129.049 129.176C122.945 127.188 115.563 125.556 106.904 124.278C98.2452 122.859 88.5926 122.149 77.9463 122.149C69.1453 122.149 62.1187 122.788 56.8665 124.065C51.7563 125.343 48.0656 127.259 45.7944 129.814C43.6651 132.228 42.6005 135.208 42.6005 138.757C42.6005 143.442 44.3039 147.203 47.7107 150.042C51.2595 152.881 56.3697 155.082 63.0414 156.643C69.8551 158.205 78.0882 159.553 87.7409 160.689C103.072 162.392 115.279 164.805 124.364 167.928C133.449 171.051 139.979 175.239 143.953 180.491C147.928 185.743 149.915 192.557 149.915 200.932C149.915 206.468 148.567 211.507 145.87 216.05C143.315 220.45 139.411 224.283 134.159 227.548C128.907 230.67 122.377 233.084 114.57 234.787C106.904 236.349 97.9613 237.129 87.7409 237.129ZM226.225 237.129C201.809 237.129 184.136 231.309 173.206 219.669C162.418 207.887 157.024 191.492 157.024 170.483C157.024 156.998 159.366 145.429 164.05 135.776C168.877 125.982 176.329 118.458 186.408 113.206C196.628 107.812 209.9 105.115 226.225 105.115H232.826C248.866 105.115 261.854 107.741 271.791 112.993C281.87 118.245 289.251 125.769 293.935 135.563C298.62 145.358 300.962 156.998 300.962 170.483C300.962 191.492 295.568 207.887 284.78 219.669C273.991 231.309 256.673 237.129 232.826 237.129H226.225ZM228.354 219.882H230.696C241.343 219.882 250.073 218.321 256.886 215.198C263.7 212.075 268.739 206.965 272.004 199.867C275.411 192.628 277.114 182.833 277.114 170.483C277.114 158.417 275.411 148.907 272.004 141.951C268.597 134.854 263.487 129.814 256.673 126.833C249.86 123.71 241.201 122.149 230.696 122.149H228.354C217.708 122.149 208.836 123.71 201.738 126.833C194.783 129.956 189.53 135.067 185.982 142.164C182.575 149.262 180.871 158.701 180.871 170.483C180.871 182.691 182.575 192.415 185.982 199.654C189.53 206.894 194.854 212.075 201.951 215.198C209.049 218.321 217.85 219.882 228.354 219.882ZM378.245 237.129C353.829 237.129 336.156 231.309 325.226 219.669C314.438 207.887 309.043 191.492 309.043 170.483C309.043 156.998 311.386 145.429 316.07 135.776C320.896 125.982 328.349 118.458 338.427 113.206C348.648 107.812 361.92 105.115 378.245 105.115H384.845C400.886 105.115 413.874 107.741 423.811 112.993C433.889 118.245 441.271 125.769 445.955 135.563C450.639 145.358 452.982 156.998 452.982 170.483C452.982 191.492 447.588 207.887 436.799 219.669C426.011 231.309 408.693 237.129 384.845 237.129H378.245ZM380.374 219.882H382.716C393.362 219.882 402.092 218.321 408.906 215.198C415.72 212.075 420.759 206.965 424.024 199.867C427.431 192.628 429.134 182.833 429.134 170.483C429.134 158.417 427.431 148.907 424.024 141.951C420.617 134.854 415.507 129.814 408.693 126.833C401.879 123.71 393.22 122.149 382.716 122.149H380.374C369.727 122.149 360.856 123.71 353.758 126.833C346.802 129.956 341.55 135.067 338.001 142.164C334.595 149.262 332.891 158.701 332.891 170.483C332.891 182.691 334.595 192.415 338.001 199.654C341.55 206.894 346.873 212.075 353.971 215.198C361.068 218.321 369.869 219.882 380.374 219.882ZM464.257 235C465.251 235 466.244 234.006 467.238 232.019C468.232 230.032 468.728 226.767 468.728 222.224V120.02C468.728 115.477 468.232 112.283 467.238 110.438C466.244 108.451 465.251 107.386 464.257 107.244H497.261C497.119 107.67 497.616 108.948 498.751 111.077C500.029 113.206 502.3 116.329 505.565 120.446C506.558 121.723 508.617 124.278 511.74 128.111C515.004 131.944 519.05 136.699 523.876 142.377C528.703 147.913 533.884 154.017 539.42 160.689C545.098 167.218 550.776 173.89 556.454 180.704C562.274 187.375 567.81 193.763 573.062 199.867H573.488V120.02C573.488 115.477 572.991 112.283 571.998 110.438C571.004 108.451 570.01 107.386 569.017 107.244H601.808C600.814 107.244 599.82 108.238 598.827 110.225C597.833 112.212 597.336 115.548 597.336 120.233V222.224C597.336 226.767 597.833 230.032 598.827 232.019C599.82 234.006 600.814 235 601.808 235H573.914C574.056 234.574 573.488 233.297 572.211 231.167C570.933 228.896 568.662 225.773 565.397 221.799C563.268 219.101 560.145 215.34 556.028 210.513C552.054 205.545 547.511 199.938 542.401 193.692C537.291 187.304 531.826 180.633 526.006 173.677C520.328 166.722 514.65 159.766 508.972 152.81C503.435 145.855 498.183 139.396 493.215 133.434H492.576V222.224C492.576 226.767 493.073 230.032 494.067 232.019C495.06 234.006 496.054 235 497.048 235H464.257Z" fill="#121212"/>
</g>
<path d="M87.0113 349.32C71.5386 349.32 57.8403 348.611 45.9165 347.191C33.9926 345.772 25.4045 344.352 20.1524 342.933V338.674L15.8938 315.891C17.8811 318.162 21.6428 320.575 27.1789 323.13C32.857 325.685 40.3804 327.886 49.7491 329.731C59.1179 331.434 70.261 332.286 83.1786 332.286C94.8186 332.286 103.62 331.505 109.581 329.944C115.685 328.241 119.802 325.969 121.931 323.13C124.202 320.149 125.338 316.743 125.338 312.91C125.338 308.367 123.493 304.748 119.802 302.051C116.111 299.354 110.575 297.224 103.194 295.663C95.9542 293.959 86.9403 292.469 76.152 291.191C62.0989 289.346 50.8138 286.933 42.2967 283.952C33.7796 280.829 27.6048 276.712 23.7721 271.602C19.9394 266.492 18.0231 260.033 18.0231 252.226C18.0231 245.554 20.0104 239.592 23.985 234.34C28.1016 229.088 34.2765 224.971 42.5096 221.99C50.7428 218.867 61.2472 217.306 74.0227 217.306C88.7856 217.306 101.632 218.016 112.562 219.435C123.493 220.855 131.229 222.274 135.771 223.694V227.952L142.159 247.116C139.178 245.27 134.565 243.354 128.319 241.367C122.215 239.379 114.834 237.747 106.175 236.469C97.5156 235.05 87.863 234.34 77.2166 234.34C68.4157 234.34 61.3891 234.979 56.1369 236.256C51.0267 237.534 47.336 239.45 45.0647 242.005C42.9355 244.419 41.8709 247.4 41.8709 250.948C41.8709 255.633 43.5743 259.394 46.9811 262.233C50.5299 265.072 55.6401 267.273 62.3118 268.834C69.1254 270.396 77.3586 271.744 87.0113 272.88C102.342 274.583 114.55 276.996 123.635 280.119C132.719 283.242 139.249 287.43 143.224 292.682C147.198 297.934 149.186 304.748 149.186 313.123C149.186 318.659 147.837 323.698 145.14 328.241C142.585 332.641 138.681 336.474 133.429 339.739C128.177 342.862 121.647 345.275 113.84 346.978C106.175 348.54 97.2317 349.32 87.0113 349.32ZM225.495 349.32C201.08 349.32 183.407 343.5 172.476 331.86C161.688 320.078 156.294 303.683 156.294 282.674C156.294 269.189 158.636 257.62 163.321 247.967C168.147 238.173 175.599 230.649 185.678 225.397C195.898 220.003 209.171 217.306 225.495 217.306H232.096C248.136 217.306 261.125 219.932 271.061 225.184C281.14 230.436 288.521 237.96 293.206 247.754C297.89 257.549 300.232 269.189 300.232 282.674C300.232 303.683 294.838 320.078 284.05 331.86C273.262 343.5 255.944 349.32 232.096 349.32H225.495ZM227.624 332.073H229.967C240.613 332.073 249.343 330.512 256.157 327.389C262.97 324.266 268.009 319.156 271.274 312.058C274.681 304.819 276.385 295.024 276.385 282.674C276.385 270.609 274.681 261.098 271.274 254.142C267.868 247.045 262.757 242.005 255.944 239.024C249.13 235.901 240.471 234.34 229.967 234.34H227.624C216.978 234.34 208.106 235.901 201.009 239.024C194.053 242.147 188.801 247.258 185.252 254.355C181.845 261.453 180.142 270.892 180.142 282.674C180.142 294.882 181.845 304.606 185.252 311.845C188.801 319.085 194.124 324.266 201.222 327.389C208.319 330.512 217.12 332.073 227.624 332.073ZM377.515 349.32C353.099 349.32 335.426 343.5 324.496 331.86C313.708 320.078 308.314 303.683 308.314 282.674C308.314 269.189 310.656 257.62 315.34 247.967C320.167 238.173 327.619 230.649 337.698 225.397C347.918 220.003 361.191 217.306 377.515 217.306H384.116C400.156 217.306 413.145 219.932 423.081 225.184C433.16 230.436 440.541 237.96 445.226 247.754C449.91 257.549 452.252 269.189 452.252 282.674C452.252 303.683 446.858 320.078 436.07 331.86C425.281 343.5 407.963 349.32 384.116 349.32H377.515ZM379.644 332.073H381.986C392.633 332.073 401.363 330.512 408.176 327.389C414.99 324.266 420.029 319.156 423.294 312.058C426.701 304.819 428.404 295.024 428.404 282.674C428.404 270.609 426.701 261.098 423.294 254.142C419.887 247.045 414.777 242.005 407.963 239.024C401.15 235.901 392.491 234.34 381.986 234.34H379.644C368.998 234.34 360.126 235.901 353.028 239.024C346.073 242.147 340.821 247.258 337.272 254.355C333.865 261.453 332.162 270.892 332.162 282.674C332.162 294.882 333.865 304.606 337.272 311.845C340.821 319.085 346.144 324.266 353.241 327.389C360.339 330.512 369.14 332.073 379.644 332.073ZM463.527 347.191C464.521 347.191 465.515 346.197 466.508 344.21C467.502 342.223 467.999 338.958 467.999 334.415V232.211C467.999 227.668 467.502 224.474 466.508 222.629C465.515 220.642 464.521 219.577 463.527 219.435H496.531C496.389 219.861 496.886 221.139 498.022 223.268C499.299 225.397 501.57 228.52 504.835 232.637C505.829 233.914 507.887 236.469 511.01 240.302C514.275 244.135 518.32 248.89 523.147 254.568C527.973 260.104 533.154 266.208 538.69 272.88C544.368 279.409 550.047 286.081 555.725 292.895C561.545 299.566 567.081 305.954 572.333 312.058H572.759V232.211C572.759 227.668 572.262 224.474 571.268 222.629C570.275 220.642 569.281 219.577 568.287 219.435H601.078C600.084 219.435 599.091 220.429 598.097 222.416C597.103 224.403 596.606 227.739 596.606 232.424V334.415C596.606 338.958 597.103 342.223 598.097 344.21C599.091 346.197 600.084 347.191 601.078 347.191H573.185C573.326 346.765 572.759 345.488 571.481 343.358C570.204 341.087 567.932 337.964 564.667 333.99C562.538 331.293 559.415 327.531 555.299 322.705C551.324 317.736 546.782 312.129 541.671 305.883C536.561 299.496 531.096 292.824 525.276 285.868C519.598 278.913 513.92 271.957 508.242 265.001C502.706 258.046 497.454 251.587 492.485 245.625H491.847V334.415C491.847 338.958 492.343 342.223 493.337 344.21C494.331 346.197 495.324 347.191 496.318 347.191H463.527Z" fill="#121212"/>
<g filter="url(#filter0_f_656_6651)">
<circle cx="366.779" cy="280.83" r="80.1702" fill="#33FFA9"/>
</g>
<g filter="url(#filter1_f_656_6651)">
<circle cx="319.068" cy="250.068" r="32.0681" fill="#33FFA9"/>
</g>
<path d="M445.723 177.331H234.952C218.381 177.331 213.746 200.063 228.993 206.551L412.7 284.724C425.062 289.985 425.04 307.516 412.664 312.745L168.524 415.894" stroke="#33FFA9" stroke-width="15.6869"/>
<defs>
<filter id="filter0_f_656_6651" x="86.1829" y="0.234009" width="561.192" height="561.192" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="100.213" result="effect1_foregroundBlur_656_6651"/>
</filter>
<filter id="filter1_f_656_6651" x="206.83" y="137.83" width="224.476" height="224.477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="40.0851" result="effect1_foregroundBlur_656_6651"/>
</filter>
<clipPath id="clip0_656_6651">
<rect width="145.545" height="606.438" fill="white" transform="matrix(0 -1 1 0 0 518)"/>
</clipPath>
<clipPath id="clip1_656_6651">
<rect width="606.438" height="153.631" fill="white" transform="translate(8.08594 47)"/>
</clipPath>
</defs>
</svg>

  </div>
  </div> 
 <div className="w-full h-1/2 align-middle md:space-x-6 flex space-y-5 md:space-y-0 flex-col md:flex-row justify-center items-center">
    <input placeholder="Email Id..." value={email} onChange={(e)=>{setemail(e.target.value)}} className="px-5 h-12 focus:outline-none w-2/3 md:w-1/3 text-black dark:text-white rounded-3xl"></input>
    <button onClick={handleClick} href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Notify</span>
<span class="relative invisible">Notify Me</span>
</button>

  </div>

</div>
<Footer/>
    </>
  );
};

export default LandingPage;



