import Typed from 'typed.js';
import React, { useEffect, useRef, useState } from 'react';

import './herosection.css';
import constants from '../../constants';

const { user_name, nav_menu, hire_me_button, resume_button, resume_url, profile_image_url, animation_strings, linkedin_url, tag_line } = constants


const typedOptions = {
    strings: animation_strings,
    startDelay: 0,
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 60,
    smartBackspace: true,
    loop: true,
    showCursor: false
}

const HeroSection = (props) => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const navBarStyle = navBarOpen
        ? "d-flex bg-new navbar-fixed-new flex-rows px-9 py-5 transition-all "
        : "d-flex bg-new navbar-new flex-rows px-9 py-3 transition-all align-items-center"

    const toggleNavBar = () => setNavBarOpen(!navBarOpen)
    const closeNavBar = () => setNavBarOpen(false)

    const textRef = useRef(null)
    useEffect(() => {
        const typed = new Typed(textRef.current, typedOptions);
        return () => { typed.destroy() }
    }, []);

    const ImText = () => {
        return (
            <div className="d-flex flex-column justify-content-center Im-text-section">
                <span className="Im-text">
                    Hello, I'm <span className="name-Im-text">{user_name}</span>
                </span>
                <span className="Im-text-enthusiastic py-2" ref={textRef}>
                </span>
                <span className="Im-text-subheading">
                    {tag_line}
                </span>
                <div className="d-flex flex-row justify-content-center mt-5">
                    <a href={linkedin_url} target="_blank" className='btn-linkedin'>{hire_me_button}</a>
                    <a href={resume_url} target="_blank" className='btn-resume-me'>{resume_button}</a>
                </div>
            </div>
        )
    }

    return (
        <>

            <div className="navbar-option-mobile bg-new">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <span className="brand-name d-flex align-items-center">{user_name}</span>
                    <div onClick={toggleNavBar} className="bars">{" "}</div>
                </div>
            </div>

            <nav className={navBarStyle}>

                {!navBarOpen && <span className="brand-name">{user_name}</span>}

                <div className="d-flex flex-rows">
                    <a href={"#hero-section"} onClick={closeNavBar} className="mx-4 nav-items">{nav_menu.home}</a>
                    <a href={"#about-section"} onClick={closeNavBar} className="mx-4 nav-items">{nav_menu.about}</a>
                    <a href={"#resume-section"} onClick={closeNavBar} className="mx-4 nav-items">{nav_menu.resume}</a>
                    <a href={"#contact-section"} onClick={closeNavBar} className="mx-4 nav-items">{nav_menu.contact}</a>
                </div>

            </nav>

            <div id={"hero-section"} className="herosection px-10 py-3">

                <div className="herosection-2 row justify-content-center my-5">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ImText />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex justify-content-center Anim">
                            <img
                                className="custom-img"
                                alt="heroimage"
                                src={profile_image_url}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default HeroSection;
