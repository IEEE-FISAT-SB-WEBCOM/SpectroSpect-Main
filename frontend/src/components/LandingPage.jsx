import { Link } from "react-router-dom";
import Footer from "./footer";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { Tilt } from "react-tilt";
import footerLogo from "../assets/Frame.png"
import { FaArrowDownLong } from "react-icons/fa6";


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
                <div className="flex flex-col">

                <div className="w-4/6 text-3xl">
                "Spectrospect is a tech symposium spotlighting signal processing’s forefront.Engage in workshops, discussions, and competitions led by industry experts.Explore digital, audio, and visual processing, machine learning ,and emerging tech. Connect with innovators, showcase your skills,and dive into the pulse of technological evolution."
                
                </div>
                <div className="w-2/3 flex ">
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

            </div>
            </div>
            </div>

  <div className="flex flex-col lg:flex-row bg-black items-center justify-center" id="Workshops">
        <div className="md:w-3/4 flex flex-col  md:mt-32 lg:mr-8 px-3 py-3">
        <div className="flex text-3xl font-bold align-middle self-start items-center mb-10">
            <MdArrowOutward className="text-green-400 text-5xl mr-3" />
            Workshops
          </div>
       
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
              <div href="#" class="block rounded-lg p-4">
                <img
                  alt="Home"
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-56 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                  <dl>
                    <div>
                      <dd class="font-medium">Marine Gwenddydd</dd>
                      <div>
                        <dd class="text-sm text-gray-500">Managing Director</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
              <div href="#" class="block rounded-lg p-3">
                <img
                  alt="Home"
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-56 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                  <dl>
                    <div>
                      <dd class="font-medium">Marine Gwenddydd</dd>
                      <div>
                        <dd class="text-sm text-gray-500">Managing Director</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div> <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
              <div href="#" class="block rounded-lg p-4">
                <img
                  alt="Home"
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-56 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                  <dl>
                    <div>
                      <dd class="font-medium">Marine Gwenddydd</dd>
                      <div>
                        <dd class="text-sm text-gray-500">Managing Director</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div> <div className="md:w-1/4 w-full hover:cursor-pointer hover:scale-105 transition duration-300">
              <div href="#" class="block rounded-lg p-4">
                <img
                  alt="Home"
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-56 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                  <dl>
                    <div>
                      <dd class="font-medium">Marine Gwenddydd</dd>
                      <div>
                        <dd class="text-sm text-gray-500">Managing Director</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>



          </div>
          <div className="mt-10 hover:bg-white hover:text-black font-bold transition duration-700 hover:cursor-pointer flex items-center w-full justify-center border border-gray-600 p-2 rounded-3xl">View all
          <MdArrowOutward className="text-green-400 text-2xl ml-3 mr-3" />

          </div>
        </div>
      </div>






      {/* Insta */}
      <div className="flex flex-col lg:flex-row bg-black text-white items-center justify-center">
        <div className="md:w-3/4 flex flex-col md:mt-32 lg:mr-8 px-3 py-3">
        <div className="flex text-3xl mb-10 font-bold align-middle self-start items-center">
            <MdArrowOutward className="text-green-400 text-5xl mr-3" />
            Latest Update
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Tilt options={defaultOptions} className=" hover:cursor-pointer">

          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </div>
      </article>
      </Tilt>

      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </div>
      </article>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </div>
      </article>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </div>
      </article>
</div>








          <div className="my-10 hover:bg-white hover:text-black font-bold transition duration-600 hover:cursor-pointer flex items-center w-full justify-center border border-gray-700 p-2 rounded-3xl">View all
          <MdArrowOutward className="text-green-400 text-2xl ml-3 mr-3" />

          </div>
            </div>
            </div>
      <Footer />
    </>
  );
};

export default LandingPage;
