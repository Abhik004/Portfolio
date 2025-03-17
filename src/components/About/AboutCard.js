import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhik Samanta </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently pursuing my B.Tech from Kalinga Institute of Indudtrial Technology, Bhubaneswar.
            <br />
            I have completed my Matriculation & Intermeadiate from Bhavan's NSCB Vidyaniketan, Haldia, West Bengal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn more and build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
