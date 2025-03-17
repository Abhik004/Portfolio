import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.2rem", color: "white" }}>
            Hey there! I am <span className="purple">Abhik Samanta</span>, hailing from the vibrant lands of <span className="purple">West Bengal, India</span>.
            <br />
            <br />
            Currently, I am pursuing my <span className="purple">B.Tech</span> at Kalinga Institute of Industrial Technology, Bhubaneswar.
            My foundational education was shaped at Bhavan's NSCB Vidyaniketan, Haldia, West Bengal.
            <br />
            <br />
            Beyond my academic journey, my passion lies in <span className="purple">building innovative applications</span> and mastering modern tech stacks. Here's a glimpse of my tech arsenal:
            <span className="purple"> MERN stack, Next.js, TypeScript, Docker, GraphQL</span>, and more!
          </p>
          <ul style={{ marginTop: "20px" }}>
            <li className="about-activity">
              <ImPointRight style={{ color: "#6f42c1" }} /> Gaming adventures that fuel creativity
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#6f42c1" }} /> Diving into gripping novels
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#6f42c1" }} /> Exploring new places and cultures
            </li>
          </ul>

          <p style={{ color: "#6f42c1", fontStyle: "italic", fontWeight: "500" }}>
            "Stay curious, keep learning, and create impactful solutions!"
          </p>
          <footer className="blockquote-footer">Abhik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
