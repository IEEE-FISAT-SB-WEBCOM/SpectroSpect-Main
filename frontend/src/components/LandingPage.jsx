import { Link } from "react-router-dom"

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
        </>
    )
}

export default LandingPage