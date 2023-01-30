import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiAndroid } from "react-icons/di"
import { IoMdCompass } from "react-icons/io"
import { SiVisualstudiocode, SiPostman, SiXcode } from "react-icons/si";


const vscodeUrl = "https://code.visualstudio.com/"
const androidStudioUrl = "https://developer.android.com/studio"
const xcodeUrl = "https://g.co/kgs/ZRk5bK"
const postManUrl = "https://www.postman.com/"
const mongoCompassUrl = "https://www.mongodb.com/products/compass"




const ToolItem = ({ children, url }) => {
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
    { children: <SiVisualstudiocode />, url: vscodeUrl },
    { children: <DiAndroid />, url: androidStudioUrl },
    { children: <SiXcode />, url: xcodeUrl },
    { children: <SiPostman />, url: postManUrl },
    { children: <IoMdCompass />, url: mongoCompassUrl },
]

const Toolstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techStackItems.map((item) => <ToolItem {...item} />)}
        </Row>
    );
}

export default Toolstack;
