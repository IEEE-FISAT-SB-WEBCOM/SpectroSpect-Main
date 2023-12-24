import { Link } from "react-router-dom";
import Footer from "./footer";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { Tilt } from "react-tilt";
import footerLogo from "../assets/Frame.png"
import { FaArrowDownLong } from "react-icons/fa6";
import Workshop2 from "../Workshop2";
import { useEffect } from "react";
import Navbar from "./navbar";


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
  
  const [feed, setFeed] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const access="IGQWRNazFESEQwSnlSb2szT1RCdXZAScHFBVU9MMVI2dnFBRXZARVktjbDMxWUJVemdENTc1NzdXSUhHWUFYNGFUaHlpUllSUk5SSmxOTVB5c0RCS2FIOTBkX01OUG5oRTlLWlRxNkhsSHZAqdFN3VFF1WmNwR0RvV1EZD";
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${access}`;
        const response = await fetch(url);
        const data = await response.json();
        setFeed(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };
  
    fetchData();
  }, []);
  
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
    

  return (
    <>
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
<div className="flex items-center min-w-full justify-center">
<h1 className=" text-9xl">Spectrospect</h1>
<MdArrowOutward className="text-green-400 text-5xl mr-3" />

</div>
<img src={footerLogo} className="mt-20"></img>




<div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="about">
        <div className="md:w-3/4 flex flex-col  md:mt-32 lg:mr-8 px-3 py-3">
            <div className="w-full flex ">
                <div className="flex w-4/6 flex-col">

                <div className=" text-3xl">
                "Spectrospect is a tech symposium spotlighting signal processing’s forefront.Engage in workshops, discussions, and competitions led by industry experts.Explore digital, audio, and visual processing, machine learning ,and emerging tech. Connect with innovators, showcase your skills,and dive into the pulse of technological evolution."
                
                </div>
                <div className=" flex ">
                <button
                href="#_"
                className="relative mt-10 inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full flex items-center text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                <FaArrowDownLong className="" />Brochure
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
                </div>
                </div>

              <div className="grid items-start pl-10 justify-center align-middle grid-cols-2 grid-rows-3 w-2/6  min-h-full text-black">
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                Ieee
              </div>
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                Ieee
              </div>
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                Ieee
              </div>
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                Ieee
              </div>
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                Ieee
              </div>
              <div className="w-2/3 border border-gray-700 flex mt-5 items-center align-middle justify-center rounded-2xl h-8">
                Ieee
              </div>

              </div>
            </div>
            </div>
            </div>

  <div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="Workshops">
        <div className="md:w-3/4 flex flex-col  md:mt-32 lg:mr-8 px-3 py-3">
        <div className="flex text-3xl font-bold align-middle self-start items-center mb-10">
            <MdArrowOutward className="text-green-400 text-5xl mr-3" />
            Workshops
          </div>
            {/* <Workshop2/> */}
            </div>
            </div>




      {/* Speaker Section */}
      <div className="flex flex-col lg:flex-row bg-black items-center justify-center">
        <div className="md:w-3/4 flex w-full flex-col  md:mt-32 lg:mr-8 px-3 py-3">
          <div className="flex w-full text-3xl font-bold align-middle self-start items-center">
            <MdArrowOutward className="text-green-400 sm:self-center text-5xl mr-3" />
            Speakers
          </div>
          <div className="flex mt-10 w-full md:flex-row flex-col">
            {/* Speaker */}
            <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
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
            <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
              <div href="#" className="block rounded-lg p-3">
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
            </div> <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
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
            </div> <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
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



          </div>
          <Link to="/Speakers">
          <div className="mt-10 hover:bg-white hover:text-black font-bold transition duration-700 hover:cursor-pointer flex items-center w-full justify-center border border-gray-600 p-2 rounded-3xl">View all
          <MdArrowOutward className="text-green-400 text-2xl ml-3 mr-3" />
          </div>
          </Link>
        </div>
      </div>






      {/* Insta */}
      <div className="flex flex-col lg:flex-row bg-black text-white items-center justify-center">
  <div className="md:w-full lg:w-3/4 flex flex-col md:mt-32 lg:mr-8 px-3 py-3">
    <div className="flex text-3xl mb-10 font-bold align-middle self-start items-center">
      <MdArrowOutward className="text-green-400 text-5xl mr-3" />
      Latest Update
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {feed.map(item=>(

      <Tilt options={defaultOptions} key={item.id} className="hover:cursor-pointer mb-4 md:mb-0">
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full">
          <img
            alt="Office"
            src={item.media_url}
          />
        
        </article>
      </Tilt>
      ))}


    </div>

    <Link to="/Events">
      <div className="my-10 hover:bg-white hover:text-black font-bold transition duration-600 hover:cursor-pointer flex items-center w-full justify-center border border-gray-700 p-2 rounded-3xl">
        View all
        <MdArrowOutward className="text-green-400 text-2xl ml-3 mr-3" />
      </div>
    </Link>
  </div>
</div>

      <Footer />
    </>
  );
};

export default LandingPage;



