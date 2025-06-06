import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { getYearsOfExperience } from "./utils";

const ActivityItem = ({ name }) => (
  <li className="about-activity">
    <ImPointRight />
    {"  "}
    {name}
  </li>
);

const careerStartDate = "01-06-2021"; // dd-mm-yyyy

const yearsOfExperience = getYearsOfExperience(careerStartDate);

const aboutFirstLine = `I am a Software Engineer. I have ${yearsOfExperience} year of experience as a Mobile Application developer.`;

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Poojan Bhatt </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            {aboutFirstLine}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <ActivityItem name={"Playing Games"} />
            <ActivityItem name={"Sports"} />
            <ActivityItem name={"Writting Tech Blogs"} />
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep practicing until it becomes Habit."{" "}
          </p>
          <footer className="blockquote-footer">Poojan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
