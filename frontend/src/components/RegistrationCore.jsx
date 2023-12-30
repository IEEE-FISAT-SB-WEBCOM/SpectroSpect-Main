import { MdArrowOutward } from "react-icons/md";
const RegistrationCore = () => {
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
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:window.innerHeight>window.innerWidth?"column":"row"}}>
                <div className="regsitrationCard" style={{width:window.innerHeight>window.innerWidth?"80vw":"30vw"}}>
                    <h1>IEEE SPS MEMBERS</h1>
                    <p>Food and Accommodation<br/>(3 days and 2 nights)<br/>
                        4x Workshop<br/>
                        3x Talk Session<br/>
                        2x Culturals<br/>
                        Exciting Games<br/>
                        Goodies
                    </p>
                    <h1>Rs.999</h1>
                    <button>Register</button>
                </div>
                <div className="regsitrationCard" style={{width:window.innerHeight>window.innerWidth?"80vw":"30vw"}}>
                    <h1>IEEE MEMBERS</h1>
                    <p>Food and Accommodation<br/>(3 days and 2 nights)<br/>
                        4x Workshop<br/>
                        3x Talk Session<br/>
                        2x Culturals<br/>
                        Exciting Games<br/>
                        Goodies
                    </p>
                    <h1>Rs.1199</h1>
                    <button>Register</button>
                    
                </div>
                <div className="regsitrationCard" style={{width:window.innerHeight>window.innerWidth?"80vw":"30vw"}}>
                    <h1>NON IEEE MEMBERS</h1>
                    <p>Food and Accommodation<br/>(3 days and 2 nights)<br/>
                        4x Workshop<br/>
                        3x Talk Session<br/>
                        2x Culturals<br/>
                        Exciting Games<br/>
                        Goodies
                    </p>
                    <h1>Rs.1399</h1>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
    
}

export default RegistrationCore