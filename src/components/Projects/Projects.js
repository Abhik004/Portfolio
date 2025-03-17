import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import img1 from "../../Assets/img1.png"
import img2 from "../../Assets/img2.png"
import img3 from "../../Assets/img3.png"
import img4 from "../../Assets/img4.png"
import img5 from "../../Assets/img5.png"
import img6 from "../../Assets/img6.png"

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img6}
              isBlog={false}
              title="Ochi Clone"
              description="Implemented Ochi.Clone site and learnt advanced JS concepts and animations like scrollTrigger, Framer Motion , React Animations etc."
              ghLink="https://github.com/Abhik004/Ochi_Clone"
              demoLink="https://ochi-clone-7zqy5w9a6-abhik004s-projects.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="Cynthia-Ugwu clone"
              description="Tried to implement a Awaards.com nominated site by Cynthia-Ugwu learning various elemnts of Javascript like GSAP and Locomotive JS , React.JS"
              ghLink="https://github.com/Abhik004/Cynthiaugwu_Clone"
              demoLink="https://abhik004.github.io/Cynthiaugwu_Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="Simon Game"
              description="A simple Simon Game using HTML, CSS and JAVASCRIPT"
              ghLink="https://github.com/Abhik004/Simon_Game"
              demoLink="https://abhik004.github.io/Simon_Game/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Tindpuff"
              description="Why should Tinder only be restricted to humans?? A Tinder clone site for Cats using HTML & CSS"
              ghLink="https://github.com/Abhik004/TindPuff/tree/main/TindPuff"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              isBlog={false}
              title="Dice Game"
              description="Simple Dice Game using HTML , CSS and JS"
              ghLink="https://github.com/Abhik004/Dice_Game"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img5}
              isBlog={false}
              title="Instagram Clone"
              description="Used Simple HTML and CSS to create a static Insta home page"
              ghLink="https://codesandbox.io/p/sandbox/nameless-forest-y41prq"
              demoLink="https://y41prq.csb.app/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
