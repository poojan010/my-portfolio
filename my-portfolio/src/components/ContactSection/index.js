import React, { useState } from 'react';
import './contact.css'

const ContactSection = (props) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const onNameChange = (e) => setName(e.target.value)
    const onEmailChange = (e) => setEmail(e.target.value)
    const onMessageChange = (e) => setMessage(e.target.value)

    return (
        <div className="contact-me-part">
            
            <div className="relative-bg"></div>

            <div className="contact-inner-part d-flex flex-column">
                
                <span className="section-header">Contact Me</span>
                <span className="section-sub-header mb-5">Let's keep in touch.</span>

                <div className="contact-me-card row">


                    <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">

                        <span className="get-in-touch mx-4 my-5">Get in touch</span>

                        <div className="py-5 d-flex justify-content-center">

                            <lottie-player 
                                loop 
                                speed="1"   
                                autoplay
                                background="transparent"  
                                style={{width: "350px", height: "350px"}}  
                                src="https://assets9.lottiefiles.com/packages/lf20_lstnp9p3.json"  
                            ></lottie-player>

                        </div>

                    </div>


                    <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                        <div className="d-flex flex-column card-contact-right">

                            <div className="input-group my-3 d-flex flex-column">
                                <label>Name</label>
                                <input 
                                    type={"text"} 
                                    value={name}
                                    onChange={onNameChange}
                                    className={"input-groups"} 
                                    placeholder={"Enter your name"} 
                                />
                            </div>

                            <div className="input-group my-3 d-flex flex-column">
                                <label>Email</label>
                                <input 
                                    type={"text"} 
                                    value={email}
                                    onChange={onEmailChange}
                                    className={"input-groups"} 
                                    placeholder={"Enter your email"} 
                                />
                            </div>

                            <div className="input-group my-3 d-flex flex-column">
                                <label>Message</label>
                                <textarea 
                                    type={"text"} 
                                    value={message}
                                    onChange={onMessageChange}
                                    className={"input-groups"} 
                                    placeholder={"Enter your message"} 
                                />
                            </div>

                            <div className="input-group my-3 d-flex flex-column">
                                <button className="btn btn-success">Send Message </button>
                            </div>

                        </div>
                    </div>


                </div>
            
            </div>

        </div>
    );
}

export default ContactSection;
