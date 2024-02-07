import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const RegistrationCore = () => {
   
    useEffect(() => {
        gsap.fromTo(".headingRegistration",{
            opacity:0,
            x:-200
          },{opacity:1,
            x:0,
            duration:1,
            //stagger:0.5,
            scrollTrigger:{trigger:".headingRegistration",toggleActions:"restart none none none"}
          })

          gsap.fromTo("#registrationContainer div",{
            opacity:0,
            y:200,
          },{opacity:1,
            y:0,
            duration:1,
            stagger:0.5,
            scrollTrigger:{trigger:"#registrationContainer",toggleActions:"restart none none none"}
          })

          gsap.fromTo(".regsitrationCard button",{
            opacity:0,
            scale:0.5,
          },{opacity:1,
            duration:1,
            delay:1,
            scale:1,
            stagger:0.3,
            scrollTrigger:{trigger:".regsitrationCard",toggleActions:"restart none none none"}
          })
    })
    
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="headingRegistration">
                <MdArrowOutward style={{marginLeft:window.innerHeight>window.innerWidth?"10vw":"5vw",color:"#33FFA9",fontSize:"45px",marginRight:"0.5vw"}}/>
                <h1 style={{fontWeight:"700"}}>Registration</h1>
            </div>
            <div id="registrationContainer" style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:window.innerHeight>window.innerWidth?"column":"row"}}>
                <div className="regsitrationCard" style={{width:window.innerHeight>window.innerWidth?"80vw":"30vw"}}>
                    <h1>IEEE SPS MEMBERS</h1>
                    <p>Food and Accommodation<br/>(3 days and 2 nights)<br/><br/>
                        <b>4x</b> Workshop<br/>
                        <b>3x</b> Talk Session<br/>
                        <b>2x</b> Culturals<br/><br/>
                        Exciting Games<br/>
                        Goodies
                    </p>
                    <h1>Rs.999</h1>
                    <button><a href="https://forms.gle/SPYhE63BkadXttY36">Register</a></button>
                </div>
                <div className="regsitrationCard" style={{width:window.innerHeight>window.innerWidth?"80vw":"30vw"}}>
                    <h1>IEEE MEMBERS</h1>
                    <p>Food and Accommodation<br/>(3 days and 2 nights)<br/><br/>
                        <b>4x</b> Workshop<br/>
                        <b>3x</b> Talk Session<br/>
                        <b>2x</b> Culturals<br/><br/>
                        Exciting Games<br/>
                        Goodies
                    </p>
                    <h1>Rs.1199</h1>
                    <button><a href="https://forms.gle/SPYhE63BkadXttY36">Register</a></button>
                    
                </div>
                <div className="regsitrationCard" style={{width:window.innerHeight>window.innerWidth?"80vw":"30vw"}}>
                    <h1>NON IEEE MEMBERS</h1>
                    <p>Food and Accommodation<br/>(3 days and 2 nights)<br/><br/>
                        <b>4x</b> Workshop<br/>
                        <b>3x</b> Talk Session<br/>
                        <b>2x</b> Culturals<br/><br/>
                        Exciting Games<br/>
                        Goodies
                    </p>
                    <h1>Rs.1399</h1>
                    <button><a href="https://forms.gle/SPYhE63BkadXttY36">Register</a></button>
                </div>
            </div>
        </div>
    )
    
}

export default RegistrationCore