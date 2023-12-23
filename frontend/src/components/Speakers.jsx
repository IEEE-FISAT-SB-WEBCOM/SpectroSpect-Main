import Footer from "./footer"
import AK from "../assets/ak.jpg"

const Speakers = () => {

    let speakerList = []
    for(let i=0;i<4;i++){
        speakerList.push(
            <div className="speakerCard">
                <img src={AK}></img>
                <p>Anantha Krishnan {i}</p>
                <p>Showing this pic to your girl XD</p>
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


       
        <Footer/>
        </div>
}

export default Speakers



