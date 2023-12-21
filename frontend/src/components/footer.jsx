import footerLogo from "../assets/Frame.png"
import fb from "../assets/fb.png"
import ig from "../assets/Insta.png"
import gm from "../assets/mail.png"

const Footer = () => {
    return(
        <div className="footerContainer">
            <br />
            <div className="footerBeASponsor">
                
            </div>
            <div className="footerBoxContainer">
                <div className="footer-Box" id="fb1">
                <img
          className="ezgif"
          src="src\assets\ezgif.gif"  // Update the path to your GIF file
          alt="Ezgif"
        />
                </div>
                <div className="footer-Box" id="fb2">
                    <a href="https://www.facebook.com/ieeefisat/"><img src={fb} alt="FB" className="fb1-icons"></img></a>
                    <a href="https://www.instagram.com/ieeefisatsb/?hl=en"><img src={ig} alt="IG" className="fb2-icons"></img></a>
                    <a href="mailto:fisatieeesb@gmail.com"><img src={gm} alt="Mail" className="fb3-icons"></img></a>
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