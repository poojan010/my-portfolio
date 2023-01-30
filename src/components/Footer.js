import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

import constants from "../constants";
const { footerLeftTitle, footerMiddleTitle } = constants


const githubUrl = "https://github.com/poojan010";
const twitterUrl = "https://twitter.com/poojan010";
const instaUrl = "https://www.instagram.com/poojan010/";
const linkedinUrl = "https://www.linkedin.com/in/poojan-bhatt-8b7612187/";



const SocialIcon = ({ children, url }) => {
    return (
        <li className="social-icons">
            <a
                href={url}
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </li>
    )
}


const Footer = () => {

    return (
        <Container fluid className="footer">
            <Row>

                <Col md="4" className="footer-copywright">
                    <h3>{footerLeftTitle}</h3>
                </Col>

                <Col md="4" className="footer-copywright">
                    <h3>{footerMiddleTitle}</h3>
                </Col>

                <Col md="4" className="footer-body">
                    <ul className="footer-icons">

                        <SocialIcon url={githubUrl}>
                            <AiFillGithub />
                        </SocialIcon>

                        <SocialIcon url={twitterUrl}>
                            <AiOutlineTwitter />
                        </SocialIcon>

                        <SocialIcon url={linkedinUrl}>
                            <FaLinkedinIn />
                        </SocialIcon>

                        <SocialIcon url={instaUrl}>
                            <AiFillInstagram />
                        </SocialIcon>

                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
