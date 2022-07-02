import React from 'react';
import './about.css'

const AboutSection = (props) => {


    const aboutMeText = "I am a Software Engineer. I enjoy solving complex problems and I am always ready to learn and improve I have 1 year of experience as a Mobile Application developer. I enjoy building out efficient and user-friendly applications"


    return (
        <div className="about-me-section aboutme-inside my-5">
            <div className="d-flex flex-column">

                <span className="section-header" >About Me</span>
            
                <span className="section-sub-header">Why choose Me?</span>

                <div className="row justify-content-center shadow-lg px-5 my-5">

                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                        <lottie-player 
                            loop 
                            speed="1"   
                            autoplay
                            background="transparent"  
                            style={{width: "500px", height: "500px"}}  
                            src="https://assets9.lottiefiles.com/packages/lf20_bklapohq.json"  
                        ></lottie-player>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                        <span className="some-text-about-me">{aboutMeText}</span>
                        <span className="few-highlights">
                            <span className="few-text">Here are Few Highlights</span>
                            <span className="few-list">
                                <ul>
                                    <li>Cross-Platform App development</li>
                                    <li>Interactive Front end as pre design</li>
                                    <li>React, React Native, Redux </li>
                                    <li>Django, Node Js, Sql, Mongo Db </li>
                                    <li>C++, Java, Python </li>
                                </ul>
                            </span>
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutSection
