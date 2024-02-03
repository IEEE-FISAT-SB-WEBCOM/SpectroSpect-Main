import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import screen from "../assets/p1.png"
import scrn from "../assets/p2.png"
import freen from "../assets/f2.png"
import Footer from "./footer";
const Workshop = ({About,ID,Name,Perks,Speaker,SpeakerImg,SpeakerDesc,MImg,SpeakerDesig}) => {

  console.log(ID)
  const [isSticky, setIsSticky] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 250;

      setIsSticky(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
          <img src={scrn} id="scrn"></img>
          <img src={screen} id="screen"></img>
      {/* Breadcrumbs and Header */}
      <Navbar/>
      <div className="flex flex-col lg:flex-row text-white min-h-screen items-center justify-center">
        <div className="md:w-3/4  mt-5 md:mt-32 lg:mr-8 px-3 py-3">
          <div className={`flex md:flex-row flex-col  top-0 pt-5 sticky ${isSticky? ' relative rounded-md overflow-hidden bg-gradient-to-b  from-green18774F to-transparent backdrop-blur-sm bg-opacity-10' : 'bg-inherit'}`}>
            <div className="md:w-3/4 sm:w-full flex sm:flex-col items-center justify-center align-middle   ">
              <div aria-label="Breadcrumb" className=" md:flex md:self-start hidden">
                <ol className="flex items-center gap-1 text-sm bg-inherit border-0 text-white font-bold">
                  <li>
                    <Link
                      to="/"
                      className="block transition hover:text-green-400"
                    >
                      {/* <span className="sr-only"><Link to="/"> Home</Link> </span> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li className="rtl:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="block transition hover:text-green-400"
                    >
                      {" "}
                      Workshops{" "}
                    </Link>
                  </li>

                  <li className="rtl:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="block transition text-green-400 hover:text-green-400"
                    >
                      {Name}{" "}
                    </Link>
                  </li>
                </ol>
              </div>

              <h6 className="text-4xl md:text-7xl font-bold my-6">
                {Name}
              </h6>
            </div>
            <div className="w-full md:w-1/4 pb-5 md:pb-0 flex items-center justify-start md:justify-end align-middle">
              <a href="https://forms.gle/SPYhE63BkadXttY36">
              <button
                // href="#_\\"
                className="relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Register
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
              </a>
            </div>
          </div>
          {/* Content section */}
          <div className="w-full h-72 rounded-md my-8 lg:my-20" style={{backgroundImage:`url(${MImg})`,backgroundSize:"cover"}}>
            {/* <img src={MImg} style={{height:"100%"}}></img> */}
          </div>
          <div className="lg:text-lg">
            {About}
          </div>
<br></br>
<br></br>
          {/* Perks section */}
          <div className="flex text-xl lg:text-2xl font-bold items-center mt-6">
            <MdArrowOutward className="text-green-400 text-xl lg:text-2xl mr-3" />
            Perks
          </div>
          <div className="text-lg lg:text-xl">
            {Perks}
          </div>
<br></br>
<br></br>
          {/* Our Speakers section */}
          <div className="flex text-xl lg:text-2xl font-bold items-center mt-6">
            <MdArrowOutward className="text-green-400 text-xl lg:text-2xl mr-3" />
            Our Speakers
          </div>

          {/* Speaker Section */}
          <div className="flex flex-col lg:flex-row w-full mt-4">
            {/* Speaker image */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <div className="block rounded-lg p-4">
                <img
                  alt="Speaker"
                  src={SpeakerImg}
                  className="h-56 w-full rounded-md object-contain"
                />

                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="font-medium">{Speaker}</dd>
                      <div>
                        <dd className="text-sm text-gray-500">
                          {SpeakerDesig}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* Speaker description */}
            <div className="w-full mt-4 lg:w-3/4 lg:ml-4 h-56 rounded-lg box-border border-gray-800 border flex items-center px-5">
              {SpeakerDesc}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Workshop;
