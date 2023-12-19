import { Link } from "react-router-dom"
import Footer from "./footer"

const LandingPage = () => {
    return(
        <>
            <h1>SPECTROSPECT🪫🔌</h1>
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
            </button>

            <Footer/>
        </>
    )
}

export default LandingPage