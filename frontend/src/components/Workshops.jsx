import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import Navbar from "./navbar";

const Workshops = () => {
  const post =[{
      title:"SpectroSpect",
      Event:"Dive Into Spectra",
      Caption:"Don't miss the incredible Technical Quiz Extravaganza ! Explore mind-bending",
      link:'https://www.instagram.com/p/C1Hvwy9SAFJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      img:'SpectroSpect-Main/frontend/src/assets/CTA.png',

  },
    {
      title:"SpectroSpect",
      Event:"Idea Pitching",
      Caption:"Unleash your innovation, inspire, and let the sparks fly! Get ready to pitch your brilliance! ",
      link:'',
      img:"SpectroSpect-Main/frontend/src/assets/ideaofs.jpeg",   
    },
    {
      title:"SpectroSpect",
      Event:"Of Spect Series",
      Caption:"Brace yourselves for a pulse-pounding lineup of electrifying series of events",
      link:'',
      img:"SpectroSpect-Main/frontend/src/assets/ofs.jpeg",   
    },
    {
      title:"SpectroSpect",
      Event:"View of Spect",
      Caption:"Get ready to unleash your inner explorer, capture the unseen, and reveal the hidden beauty ",
      link:'',
      img:"SpectroSpect-Main/frontend/src/assets/viewofs.jpeg",   
    },
    {
      title:"SpectroSpect",
      Event:"Moves of Spect",
      Caption:"Step into the virtual spotlight and showcase your acting prowess",
      link:'https://www.instagram.com/p/C1HvqNSSeyN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      img:"SpectroSpect-Main/frontend/src/assets/movesofs.jpeg",   
    },
    {
      title:"SpectroSpect",
      Event:"Face of Spect",
      Caption:"Demonstrate your modeling expertise in Face of Spect ",
      link:'',
       img:"SpectroSpect-Main/frontend/src/assets/faceofs.jpeg",   
    },
    {
      title:"SpectroSpect",
      Event:"Star of Spect",
      Caption:"Step into the virtual spotlight and showcase your acting prowess",
      link:'',
      img:"SpectroSpect-Main/frontend/src/assets/starofs.jpeg",   
    },
    {
      title:"SpectroSpect",
      Event:"Voice of Spect",
      Caption:"Get ready to unleash your inner explorer, capture the unseen, and reveal the hidden beauty ",
      link:'',
      img:"SpectroSpect-Main/frontend/src/assets/voiceofs.jpeg",   
    },
  ]



  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 2000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

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
      {/* Breadcrumbs and Header */}
      <Navbar/>
      <div className="flex flex-col lg:flex-row text-white min-h-screen items-center justify-center">
        <div className="md:w-3/4  mt-5 md:mt-32 lg:mr-8 px-3 py-3">
          <div className={`flex z-50 md:flex-row flex-col  top-0 pt-5 sticky ${isSticky? ' relative rounded-md overflow-hidden bg-gradient-to-b  from-green18774F to-transparent backdrop-blur-sm bg-opacity-10' : 'bg-inherit'}`}>
            <div className="md:w-3/4 sm:w-full flex sm:flex-col items-center justify-center align-middle   ">
              <div aria-label="Breadcrumb" className=" md:flex md:self-start hidden">
                <ol className="flex items-center gap-1 text-sm bg-inherit border-0 text-white font-bold">
                  <li>
                    <a
                      href="/"
                      className="block transition hover:text-green-400"
                    >
                      <span className="sr-only"><Link to="/"> Home</Link> </span>

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
                    </a>
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
                    <a
                      href="#"
                      className="block transition text-green-400 hover:text-green-400"
                    >
                      Latest Posts{" "}
                    </a>
                  </li>
                </ol>
              </div>

              <h6 className="lg:text-5xl  text-4xl flex items-center justify-start self-start font-bold my-6">
        Latest Posts
        <MdArrowOutward className="text-green-400  lg:text-5xl text-5xl ml-3" />

              </h6>
            </div>
            <div className="w-full md:w-1/4 pb-5 md:pb-0 flex md:items-center justify-center md:justify-end align-middle">
              <a href="https://www.instagram.com/ieeefisatsb?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="><button
                href="#_"
                className="relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Instagram
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button></a>
            </div>
          </div>





          <div className="grid z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-h-screen py-5 gap-5">
            {post.map((item,index) => (
              <Tilt key={index} options={defaultOptions}>
                <a href={item.link} className="group relative block bg-black">
                  <img
                    alt="Event"
                    src={item.img}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                      {item.title}
                    </p>
                    <p className="text-xl font-bold text-white sm:text-2xl">
{item.Event}                    </p>
                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                       {item.Caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
