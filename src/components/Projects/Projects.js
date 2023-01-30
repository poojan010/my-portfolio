import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import chatify from "../../Assets/Projects/chatify.png";



const projects = [
    {
        imgPath: chatify,
        title: "Chat Application",
        description: "An interface which makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time.",
        ghLink: "https://github.com/poojan010/chat-app",
        demoLink: "https://drive.google.com/file/d/1AVJ89m3dmbnbAuiIpcUF2IMSRS_aLQx3/view",
        isBlog: false
    },
    {
        imgPath: chatify,
        title: "Real Time White board",
        description: "An interface where user can share his White-board and make changes to the white board and this changes are made visible to other users.",
        ghLink: "https://github.com/poojan010/time-sharing-white-board",
        demoLink: "https://drive.google.com/file/d/19q7vT5fBZFKcw_sY2dIgBenG-8068jL_/view",
        isBlog: false
    }
]

const Projects = () => {

    const renderProjectCard = (item, index) => {
        return (
            <Col key={index.toString()} md={4} className="project-card">
                <ProjectCard {...item} />
            </Col>
        )
    }

    return (
        <Container fluid className="project-section">
            <Particle />

            <Container>

                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>

                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {projects.map((item, index) => renderProjectCard(item, index))}
                </Row>

            </Container>

        </Container>
    );
}

export default Projects;
