import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";


const githubUserName = "poojan010"

const Github = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <GitHubCalendar
                color="#c084f5"
                fontSize={16}
                blockSize={15}
                blockMargin={5}
                username={githubUserName}
            />
        </Row>
    );
}

export default Github;
