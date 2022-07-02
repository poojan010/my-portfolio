import React from 'react';
import './herosection.css';

const userName = "Poojan Bhatt"

const navMenu = {
    home : "Home",
    about : "About",
    resume : "Resume",
    contact : "Contact Me"
}

const hireMeButton = "Hire Me"
const resumeButton = "Get Resume"

const aboutMeText = "I am a Software Engineer. I enjoy solving complex problems and I am always ready to learn and improve I have 1 year of experience as a Mobile Application developer. I enjoy building out efficient and user-friendly applications"

const imageUrl = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"



const HeroSection = (props) => {

    const ImText = () => {
        return(
            <div className="d-flex flex-column justify-content-center Im-text-section">
                <span className="Im-text">
                    Hello, I'm <span className="name-Im-text">{userName}</span>
                </span>
                <span className="Im-text-enthusiastic py-2">
                    Entusiastiv dev 😎
                </span>
                <span className="Im-text-subheading">
                    Knack of building applications with front and back end operations
                </span>
                <div className="d-flex flex-row justify-content-center mt-5">
                    <button className='btn-hire-me'>{hireMeButton}</button>
                    <button className='btn-resume-me'>{resumeButton}</button>
                </div>
            </div>
        )
    }

    return (
        <div className="herosection px-10 py-5">

            <nav className="d-flex flex-row justify-content-between">

                <span className="brand-name">{userName}</span>

                <div className="d-flex flex-row">
                    <span className="mx-4 nav-items">{navMenu.home}</span>
                    <span className="mx-4 nav-items">{navMenu.about}</span>
                    <span className="mx-4 nav-items">{navMenu.resume}</span>
                    <span className="mx-4 nav-items">{navMenu.contact}</span> 
                </div>

            </nav>

            <div className="herosection-2 row justify-content-center">

                <div className="col-lg-6 col-md-6 col-sm-12"> 
                    <ImText />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center Anim">
                        <img 
                            className="custom-img" 
                            alt="heroimage" 
                            src={imageUrl}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HeroSection;
