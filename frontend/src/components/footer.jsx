import footerLogo from "../assets/Frame.png"
import fb from "../assets/fb.png"
import ig from "../assets/Insta.png"
import gm from "../assets/mail.png"

const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="footerBeASponsor">
                
            </div>
            <div className="footerBoxContainer">
                <div className="footer-Box" id="fb1">
                    Logo
                </div>
                <div className="footer-Box" id="fb2">
                    <a href="https://www.facebook.com/ieeefisat/"><img src={fb} alt="FB" className="fb2-icons"></img></a>
                    <a href="https://www.instagram.com/ieeefisatsb/?hl=en"><img src={ig} alt="IG" className="fb2-icons"></img></a>
                    <img src={gm} alt="Mail" className="fb2-icons"></img>
                </div>
                <div className="footer-Box" id="fb3">
                    Our Sponsors
                </div>
            </div>
            <img src={footerLogo}></img>
        </div>
    )
}

export default Footer