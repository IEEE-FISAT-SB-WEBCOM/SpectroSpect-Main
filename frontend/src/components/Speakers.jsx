import Footer from "./footer"
import AK from "../assets/ak.jpg"
import { useState } from "react"

const Speakers = () => {

    const [active,SetActive] = useState(false);

    console.log(active)

    let speakerList = []
    for(let i=1;i<5;i++){
        speakerList.push(
            <div className="speakerCard" style={{border: active === i && '2px solid green'}} key={i} onClick={() => SetActive(i)}>
                <img src={AK}></img>
                <p>Anantha Krishnan {i}</p>
                <p>Student, Doctor, Astronaut, Dev</p>
            </div>
        )
    }

    return <div className="Speakers">
            <div className="footerBeASponsor">

            </div>
            <p>Home -- Speakers</p>
            <div className="speakerCards">
                {speakerList}
            </div>
            {active && <div className="SpeakerInfo">
            <div className="speakerCard">
                <img src={AK}></img>
                <p>Anantha Krishnan {active}</p>
                <p>Student, Doctor, Astronaut, Dev</p>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>}

       
        <Footer/>
        </div>
}

export default Speakers



