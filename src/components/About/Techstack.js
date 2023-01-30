import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
} from "react-icons/di";
import {
    SiFirebase,
    SiTypescript,
    SiRedux
} from "react-icons/si";



const cppUrl = "https://g.co/kgs/nNgXiT"
const jsUrl = "https://www.javascript.com/"
const tsUrl = "https://www.typescriptlang.org/"
const rnUrl = "https://reactnative.dev/"
const reduxUrl = "https://redux.js.org/"
const nodeUrl = "https://nodejs.org/"
const mongoUrl = "https://www.mongodb.com/"
const gitUrl = "https://git-scm.com/"
const firebaseUrl = "https://firebase.google.com/"



const SkillItem = ({ children, url }) => {
    return (
        <Col xs={4} md={2} className="tech-icons">
            <a
                href={url}
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </Col>
    )
}

const techStackItems = [
    { children: <CgCPlusPlus />, url: cppUrl },
    { children: <DiJavascript1 />, url: jsUrl },
    { children: <SiTypescript />, url: tsUrl },
    { children: <DiReact />, url: rnUrl },
    { children: <SiRedux />, url: reduxUrl },
    { children: <DiNodejs />, url: nodeUrl },
    { children: <DiMongodb />, url: mongoUrl },
    { children: <DiGit />, url: gitUrl },
    { children: <SiFirebase />, url: firebaseUrl },
]

const Techstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techStackItems.map((item) => <SkillItem {...item} />)}
        </Row>
    );
}

export default Techstack;
