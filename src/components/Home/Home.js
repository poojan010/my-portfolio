import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "../../Assets/home-main.svg";

import Type from "./Type";
import Home2 from "./Home2";
import Particle from "../Particle";

import constants from "../../constants";
const { hiThere, imStrong, nameStrong } = constants


const WaveIcon = () => <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>



const Home = () => {
    return (
        <section>

            <Container fluid className="home-section" id="home">

                <Particle />

                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">

                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                {hiThere}
                                <WaveIcon />
                            </h1>

                            <h1 className="heading-name">
                                {imStrong}
                                <strong className="main-name">{nameStrong}</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>

            </Container>

            <Home2 />

        </section>
    );
}

export default Home;
