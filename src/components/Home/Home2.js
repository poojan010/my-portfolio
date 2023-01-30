import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

import myImg from "../../Assets/avatar.svg";

import constants from "../../constants";
const {
    letMe, introduce, mySelf,
    fellFree, connect, withMeOn,
    tag_line
} = constants


const githubUrl = "https://github.com/poojan010";
const twitterUrl = "https://twitter.com/poojan010";
const instaUrl = "https://www.instagram.com/poojan010/";
const linkedinUrl = "https://www.linkedin.com/in/poojan-bhatt-8b7612187/";



const SocialIconListItem = ({ children, url }) => {
    return (
        <li className="social-icons">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
            >
                {children}
            </a>
        </li>
    )
}

const ConnectWithMeConatiner = () => {
    return (
        <Row>
            <Col md={12} className="home-about-social">
                <h3>
                    {fellFree}<span className="purple">{connect}</span>{withMeOn}
                </h3>
                <ul className="home-about-social-links">

                    <SocialIconListItem url={githubUrl}>
                        <AiFillGithub />
                    </SocialIconListItem>


                    <SocialIconListItem url={twitterUrl}>
                        <AiOutlineTwitter />
                    </SocialIconListItem>

                    <SocialIconListItem url={linkedinUrl}>
                        <FaLinkedinIn />
                    </SocialIconListItem>

                    <SocialIconListItem url={instaUrl}>
                        <AiFillInstagram />
                    </SocialIconListItem>

                </ul>
            </Col>
        </Row>
    )
}



const AvatarContainer = () => {
    return (
        <Col md={4} className="myAvtar">
            <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
        </Col>
    )
}



const Ib = ({ children }) => (
    <i>
        <b className="purple">{children}</b>
    </i>
)

const IntroLine1 = () => {
    return (
        <>
            {"I am"}
            <Ib>{" proficient "}</Ib>
            in classic programming languages such as
            <Ib>{" Javascript "}</Ib>
            {" and "}
            <Ib>{" C++ "}</Ib>
        </>
    )
}

const IntroLine2 = () => {
    return (
        <>
            {"I'm interested in "}
            <Ib>{"Front end development"}</Ib>
            {" and "}
            <Ib>{" Cross Platform Moblie App development"}</Ib>
        </>
    )
}

const IntroLine3 = () => {
    return (
        <>
            {"I also cherish developing"}
            <Ib>{" Mobile apps "}</Ib>
            through using
            <Ib>{" Modern Javascript Library and frameworks "}</Ib>
            such as
            <Ib>{" React Native "}</Ib>
            and
            <Ib>{" React.js "}</Ib>
        </>
    )
}

const Home2 = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>

                <Row>
                    <Col md={8} className="home-about-description">

                        <h1 style={{ fontSize: "2.6em" }}>
                            {letMe}<span className="purple">{introduce}</span>{mySelf}
                        </h1>

                        <p className="home-about-body">
                            {tag_line}
                            <br />
                            <br />
                            <IntroLine1 />
                            <br />
                            <br />
                            <IntroLine2 />
                            <br />
                            <br />
                            <IntroLine3 />
                        </p>
                    </Col>
                    <AvatarContainer />
                </Row>

                <ConnectWithMeConatiner />

            </Container>
        </Container>
    );
}
export default Home2;
