import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { ImBlog } from "react-icons/im";
import { CgGitFork } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";

import logo from "../Assets/poojan.png";

import constants from '../constants';
const { nav_menu } = constants


const portfolioGithubUrl = "https://github.com/poojan010/my-portfolio"
const mediumBlogsUrl = "https://medium.com/me/stories/public"


const BlogsIcon = () => <ImBlog style={{ marginBottom: "2px" }} />
const ForkIcon = () => <CgGitFork style={{ fontSize: "1.2em" }} />
const StarIcon = () => <AiFillStar style={{ fontSize: "1.1em" }} />
const HomeIcon = () => <AiOutlineHome style={{ marginBottom: "3px" }} />
const AboutIcon = () => <AiOutlineUser style={{ marginBottom: "3px" }} />
const ResumeIcon = () => <CgFileDocument style={{ marginBottom: "3px" }} />
const ProjectsIcon = () => <AiOutlineFundProjectionScreen style={{ marginBottom: "3px" }} />



const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const closeNavBar = () => setIsNavExpanded(false)
    const toggleNavBar = () => setIsNavExpanded(prev => !prev)

    const [isNavSticky, setIsNavSticky] = useState(false);
    const navBarClassName = isNavSticky ? "sticky" : "navbar"
    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setIsNavSticky(true);
        } else {
            setIsNavSticky(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);


    return (
        <Navbar
            fixed="top"
            expand="md"
            expanded={isNavExpanded}
            className={navBarClassName}
        >
            <Container>

                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>

                <Navbar.Toggle onClick={toggleNavBar} aria-controls="responsive-navbar-nav">
                    <span />
                    <span />
                    <span />
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">

                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={closeNavBar}>
                                <HomeIcon />{nav_menu.home}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={closeNavBar} >
                                <AboutIcon />{nav_menu.about}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/project" onClick={closeNavBar} >
                                <ProjectsIcon />{nav_menu.projects}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={closeNavBar}>
                                <ResumeIcon />{nav_menu.resume}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href={mediumBlogsUrl} target="_blank" rel="noreferrer" >
                                <BlogsIcon />{nav_menu.blogs}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="fork-btn">
                            <Button href={portfolioGithubUrl} target="_blank" className="fork-btn-inner" >
                                <ForkIcon />{" "}<StarIcon />
                            </Button>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;
