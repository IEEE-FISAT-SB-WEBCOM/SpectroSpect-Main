import Footer from "./footer"
import AK from "../assets/ak.jpg"
import AG from "../assets/AG.jpeg"
import { useEffect, useState,useRef } from "react"
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import screen from "../assets/sc.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Speakers = () => {

  const [active,SetActive] = useState(false);
  const SpeakerRef = useRef(null)

  const tl = gsap.timeline({
    
  })

  useEffect(() => {
    gsap.fromTo(".speakerCards a",{
      opacity:0,
      y:200
    },{opacity:1,
      y:0,
      duration:2,
      stagger:0.5,
      scrollTrigger:{trigger:".speakerCards a",toggleActions:"restart none none none"}
    })

    gsap.fromTo(".speakerCards a div img",{
      opacity:0,
      scale:0.5
    },{
      opacity:1,
      duration:3,
      stagger:0.5,
      scale:1,
      scrollTrigger:{trigger:".speakerCards a div img",toggleActions:"restart none none none"}
    })

  },[])

  useEffect(()=>{
    gsap.fromTo("#SpeakerInfo div",{
      opacity:0,
      y:-200
    },{opacity:1,
      y:0,
      duration:2,
      stagger:1,
      // scrollTrigger:{trigger:"#SpeakerInfo",toggleActions:"restart none restart none"}
    })

    gsap.fromTo("#SpeakerInfo div img",{
      opacity:0,
      scale:0.5
    },{
      opacity:1,
      duration:3,
      stagger:0.5,
      scale:1,
    })
  },[active])


    console.log(active)

    let speakerList = []
    for(let i=1;i<5;i++){
        speakerList.push(
            <a href="#SpeakerInfo">
            <div className="speakerCard" style={{border: active === i && '2px solid #33FFA9'}} key={i} onClick={() => SetActive(i)}>
                <img src={AK}></img>
                <span>Anantha Krishnan {i}</span>
                <p>Student, Doctor, Astronaut, Dev</p>
            </div>
            </a>
        )
    }
    //style={{top:"-30vh",position:"sticky",border:"none",background: 'radial-gradient(#187747 15%,rgba(0, 0, 0, 0))',zIndex:"2"}}
    return  <>
          <img src={screen} id="screen"></img>

            <div className="Speakers">
            <Navbar/>
            {/* <div className="footerBeASponsor" style={{top:"-30vh",position:"sticky",border:"1px solid rgba(255, 255, 255, 0.2)",background: "rgba(0, 0, 0, 0.2)",zIndex:"2",backdropFilter:"blur(10px)"}}>
            
            </div> */}
                <div aria-label="Breadcrumb" className=" md:flex md:self-start hidden" style={{ top: 0, position: 'sticky',zIndex:"2",marginTop:"18vh" }}>
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
                      Speakers
                    </a>
                  </li>
                </ol>
              </div> 
            {/* <p><Link to="/"><span>Home</span></Link> -- Speakers</p> */}
            <div className="speakerCards" ref={SpeakerRef}>
                {speakerList}
            </div>
            {active && <div id="SpeakerInfo" style={{flexWrap: window.innerHeight > window.innerWidth && "wrap"}}>
            <div className="speakerCard">
                <img src={AG}></img>
                <span>Anantha Krishnan {active}</span>
                <p>Student, Doctor, Astronaut, Dev</p>
            </div>
            <div className="speaker-Description" style={{height: window.innerHeight > window.innerWidth  && '70vh'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>}

        
        <Footer/>
        </div>
      </>
}

export default Speakers




// import Footer from "./footer"
// import AK from "../assets/ak.jpg"
// import AG from "../assets/AG.jpeg"
// import { useState } from "react"
// import { Link } from "react-router-dom";

// const Speakers = () => {

//     const [active,SetActive] = useState(false);

//     console.log(active)

//     let speakerList = []
   
//     for(let i=1;i<5;i++){
//         speakerList.push(
//             <a href="#SpeakerInfo">
//             <div className="speakerCard" style={{border: active === i && '2px solid #33FFA9'}} key={i} onClick={() => SetActive(i)}>
//                 <img src={AK}></img>
//                 <span>Anantha Krishnan {i}</span>
//                 <p>Student, Doctor, Astronaut, Dev</p>
//             </div>
//             </a>
//         )
//     }

//     return( 
//     <>
//         <div className="flex flex-col lg:flex-row text-white min-h-screen items-center justify-center">
//         <div className="md:w-3/4  mt-5 md:mt-32 lg:mr-8 px-3 py-3"><div className="Speakers">
//             {/* <div className="footerBeASponsor"> */}

//             {/* </div> */}
            
//             <div aria-label="Breadcrumb" className=" md:flex md:self-start hidden">
//                 <ol className="flex items-center gap-1 text-sm bg-inherit border-0 text-white font-bold">
//                   <li>
//                     <a
//                       href="/"
//                       className="block transition hover:text-green-400"
//                     >
//                       <span className="sr-only"><Link to="/"> Home</Link> </span>

//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                         />
//                       </svg>
//                     </a>
//                   </li>

             

             

//                   <li className="rtl:rotate-180">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </li>

//                   <li>
//                     <a
//                       href="#"
//                       className="block transition text-green-400 hover:text-green-400"
//                     >
//                       Speakers
//                     </a>
//                   </li>
//                 </ol>
//               </div>        
              
              
              
              
//                   <div className="speakerCards">
//                 {speakerList}
//             </div>
//             { <div className="flex flex-col lg:flex-row w-full mt-4">
//             {/* Speaker image */}
//             <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
//               <div className="block rounded-lg p-4">
//                 <img
//                   alt="Speaker"
//                   src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   className="h-56 w-full rounded-md object-cover"
//                 />

//                 <div className="mt-2">
//                   <dl>
//                     <div>
//                       <dd className="font-medium">Marine Gwenddydd</dd>
//                       <div>
//                         <dd className="text-sm text-gray-500">
//                           Managing Director
//                         </dd>
//                       </div>
//                     </div>
//                   </dl>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker description */}
//             <div className="w-full lg:w-3/4 lg:ml-4 h-56 rounded-lg box-border border-gray-800 border flex items-center px-5">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//               optio delectus velit earum qui, dicta excepturi voluptas beatae
//               tenetur inventore harum recusandae, placeat minus dignissimos
//               doloribus quo voluptate debitis consectetur vel reprehenderit
//               molestiae. Optio omnis quis, ex, laudantium reiciendis eveniet
//               officiis maiores aut error earum mollitia at perspiciatis sint
//               soluta.
//             </div>
//           </div>}

// </div>
// </div>

       
//         </div>
//         <Footer/>
//         </>)
// }

// export default Speakers



