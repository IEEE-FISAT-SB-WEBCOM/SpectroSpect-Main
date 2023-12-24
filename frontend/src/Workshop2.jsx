import React from 'react';
import AK from "../src/assets/ak.jpg"
import './Workshop2.css';

const Workshop2 = () => {
    return(
        <>
         <div className="container w-75 h-100 mt-5 bg-black ">
            <div className='workshop_head d-flex align-items-center'>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3433 43.8937L36.8819 28.3551L24.8115 28.3551L24.8115 24.5623L43.357 24.5623L43.357 43.1078H39.5642L39.5642 31.0374L24.0256 46.5761L21.3433 43.8937Z" fill="#33FFA9"/>
                </svg>
                <div className='workshop text-light'>Workshop</div>
            </div>
            <div className="accordion" id='workshop'>
                <div className="accordion-item">
                    <h2 className='accordion-header' id='heading1'>
                        <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#workshop1" aria-expanded="false" aria-controls="workshop1">
                            <img src={AK} alt="" className='workshop-img' />
                            Brainwave Robotics Workshop
                        </button>
                    </h2>
                    <div className='accordion-collapse collapse show' id="workshop1" aria-labelledby="heading1" data-bs-parent="#workshop">
                        <div className="accordion-body">
                            <p className='content'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia laborum perspiciatis fugiat inventore accusantium praesentium possimus totam eius reprehenderit aut. Debitis mollitia alias iusto maxime aliquid veritatis consequatur rem distinctio.
                            </p>
                            <button className='btn btn-light'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className='accordion-header' id='heading2'>
                        <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#workshop2" aria-expanded="false" aria-controls="workshop2">
                        <img src={AK} alt="" className='workshop-img'/>
                        Digital Signal Processing using Matlab
                        </button>
                    </h2>
                    <div className='accordion-collapse collapse show' id="workshop2" aria-labelledby="heading2" data-bs-parent="#workshop">
                        <div className="accordion-body">
                            <p className='content'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia laborum perspiciatis fugiat inventore accusantium praesentium possimus totam eius reprehenderit aut. Debitis mollitia alias iusto maxime aliquid veritatis consequatur rem distinctio.
                            </p>
                            <button className='btn btn-light'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>   
                <div className="accordion-item">
                    <h2 className='accordion-header' id='heading3'>
                        <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#workshop3" aria-expanded="false" aria-controls="workshop3">
                        <img src={AK} alt="" className='workshop-img' />
                        Quantum Signal Processing Workshop
                        </button>
                    </h2>
                    <div className='accordion-collapse collapse show' id="workshop3" aria-labelledby="heading3" data-bs-parent="#workshop">
                        <div className="accordion-body">
                            <p className='content'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia laborum perspiciatis fugiat inventore accusantium praesentium possimus totam eius reprehenderit aut. Debitis mollitia alias iusto maxime aliquid veritatis consequatur rem distinctio.
                            </p>
                            <button className='btn btn-light'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>   
                <div className="accordion-item">
                    <h2 className='accordion-header' id='heading4'>
                        <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#workshop4" aria-expanded="false" aria-controls="workshop4">
                        <img src={AK} alt=""className='workshop-img'/> 
                        Speech Recognition Workshop
                        </button>
                    </h2>
                    <div className='accordion-collapse collapse show' id="workshop4" aria-labelledby="heading4" data-bs-parent="#workshop">
                        <div className="accordion-body">
                            <p className='content'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia laborum perspiciatis fugiat inventore accusantium praesentium possimus totam eius reprehenderit aut. Debitis mollitia alias iusto maxime aliquid veritatis consequatur rem distinctio.
                            </p>
                            <button className='btn btn-light'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className='accordion-header' id='heading5'>
                        <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#workshop5" aria-expanded="false" aria-controls="workshop5">
                        <img src={AK} alt="" className='workshop-img'/>
                        The Blockchain and Signal Processing Workshop
                        </button>
                    </h2>
                    <div className='accordion-collapse collapse show' id="workshop5" aria-labelledby="heading5" data-bs-parent="#workshop">
                        <div className="accordion-body">
                            <p className='content'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia laborum perspiciatis fugiat inventore accusantium praesentium possimus totam eius reprehenderit aut. Debitis mollitia alias iusto maxime aliquid veritatis consequatur rem distinctio.
                            </p>
                            <button className='btn btn-light'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>          

            </div>
         </div>
        </>
    )
}

export default Workshop2;