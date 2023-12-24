import Footer from "./footer"
import AK from "../assets/ak.jpg"
import AG from "../assets/AG.jpeg"
import { useState } from "react"
import { Link } from "react-router-dom";

const Speakers = () => {

    const [active,SetActive] = useState(false);

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

    return <div className="Speakers">
            <div className="footerBeASponsor">

            </div>
            <p><Link to="/"><span>Home</span></Link> -- Speakers</p>
            <div className="speakerCards">
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
}

export default Speakers



