import emailJs from '@emailjs/browser';
import React, { useState, useRef } from 'react';

import './contact.css'
import constants from '../../constants';


const {
    contact_card_title, contact_section_header, contact_section_subheader,
    input_placeholder_email, input_placeholder_message, input_placeholder_name,
    input_title_email, input_title_message, input_title_name, form_submit_button,
    SERVICE_ID, TEMPLATE_ID, USER_ID,
    nameRequired, emailRequired, messageRequired, invalidEmail
} = constants

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactSection = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('')

    const onNameChange = (e) => { setName(e.target.value); setError(''); }
    const onEmailChange = (e) => { setEmail(e.target.value); setError(''); }
    const onMessageChange = (e) => { setMessage(e.target.value); setError(''); }

    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        if (name.trim() === "") { setError(nameRequired); return; }
        if (email.trim() === "") { setError(emailRequired); return; }
        if (!emailRegex.test(email)) { setError(invalidEmail); return; }
        if (message.trim() === "") { setError(messageRequired); return; }

        emailJs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            USER_ID
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div id={"contact-section"} className="contact-me-part">

            <div className="relative-bg"></div>

            <div className="contact-inner-part d-flex flex-column">

                <span className="section-header">{contact_section_header}</span>
                <span className="section-sub-header mb-5">{contact_section_subheader}</span>

                <div className="contact-me-card row">


                    <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">

                        <span className="get-in-touch mx-4 my-5">{contact_card_title}</span>

                        <div className="py-5 d-flex justify-content-center">

                            <lottie-player
                                loop
                                speed="1"
                                autoplay
                                background="transparent"
                                style={{ width: "3000px" }}
                                src="https://assets9.lottiefiles.com/packages/lf20_lstnp9p3.json"
                            ></lottie-player>

                        </div>

                    </div>


                    <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                        <form ref={formRef} className="d-flex flex-column card-contact-right" onSubmit={sendEmail}>

                            <div className="input-group my-3 d-flex flex-column">
                                <label>{input_title_name}</label>
                                <input
                                    type={"text"}
                                    value={name}
                                    name={"name"}
                                    onChange={onNameChange}
                                    className={"input-groups"}
                                    placeholder={input_placeholder_name}
                                />
                            </div>

                            <div className="input-group my-3 d-flex flex-column">
                                <label>{input_title_email}</label>
                                <input
                                    type={"text"}
                                    name={"email"}
                                    value={email}
                                    onChange={onEmailChange}
                                    className={"input-groups"}
                                    placeholder={input_placeholder_email}
                                />
                            </div>

                            <div className="input-group my-3 d-flex flex-column">
                                <label>{input_title_message}</label>
                                <textarea
                                    type={"text"}
                                    name={"message"}
                                    value={message}
                                    onChange={onMessageChange}
                                    className={"input-groups"}
                                    placeholder={input_placeholder_message}
                                />
                            </div>

                            <div className="input-group my-3 d-flex flex-column">
                                <input value={form_submit_button} type='submit' className="btn btn-success" />
                            </div>

                            {error.length > 0 ? <span className="font-weight-bold text-danger">{error}</span> : null}

                        </form>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default ContactSection;
