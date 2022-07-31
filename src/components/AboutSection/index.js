import React from 'react';

import './about.css'
import constants from '../../constants';

const { about_me_text, about_section_header, about_section_subheader, highlights_header, about_highlights } = constants

const AboutSection = (props) => {


    return (
        <div id={"about-section"} className="about-me-section aboutme-inside my-5">
            <div className="d-flex flex-column">

                <span className="section-header" >{about_section_header}</span>

                <span className="section-sub-header">{about_section_subheader}</span>

                <div className="row justify-content-center shadow-lg px-5 my-5">

                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                        <lottie-player
                            loop
                            className="lottie-anim"
                            speed="1"
                            autoplay
                            background="transparent"
                            src="https://assets9.lottiefiles.com/packages/lf20_bklapohq.json"
                        ></lottie-player>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                        <span className="some-text-about-me">{about_me_text}</span>
                        <span className="few-highlights">
                            <span className="few-text">{highlights_header}</span>
                            <span className="few-list">
                                <ul>
                                    {about_highlights.map((item) => <li>{item}</li>)}
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
