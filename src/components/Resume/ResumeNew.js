import React, { useState, useEffect, useRef, } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "../Particle";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/poojan_bhatt_software_developer.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const resumeLink =
    "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";


const throttling = (func, delay) => {
    let flag = true;
    return function () {
        if (flag) {
            func.apply(this, arguments);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}


const ResumeNew = () => {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const observedDiv = useRef(null);

    const handleElementResized = () => {
        if (observedDiv.current.offsetWidth !== width) {
            setWidth(observedDiv.current.offsetWidth);
        }
        if (observedDiv.current.offsetHeight !== height) {
            setHeight(observedDiv.current.offsetHeight);
        }
    }
    const throttleResizeFn = throttling(handleElementResized, 1000)
    const resizeObserver = new ResizeObserver(throttleResizeFn)

    useEffect(() => {
        resizeObserver.observe(observedDiv.current);

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <div ref={observedDiv}>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} width={width * 0.7} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
