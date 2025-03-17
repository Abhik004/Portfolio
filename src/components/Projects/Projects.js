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
import img7 from "../../Assets/img7.png"
import img8 from "../../Assets/img8.png"
import img9 from "../../Assets/img9.png"
import img10 from "../../Assets/img10.png"
import img11 from "../../Assets/img11.png"
import img12 from "../../Assets/img12.png"
import img13 from "../../Assets/img13.png"
import img14 from "../../Assets/img14.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, you can explore much more in my GITHUB !.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img14}
              isBlog={false}
              title="DM Detox"
              description="Many students miss critical internship or placement emails due to inbox clutter, leading to lost opportunities.
• Developed a Chrome extension that filters spam and prioritizes important DMs in Gmail, improving email visibility
by 40%.Optimized DOM manipulation and content scripts, reducing email scanning time by 30%, ensuring a lightweight
(under 50KB) extension."
              ghLink="https://github.com/Abhik004/dm-detox"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img13}
              isBlog={false}
              title="Chaterly"
              description="It is a real-time collaboration and chat platform built with Node.js, Express.js, and Socket.IO, featuring seamless integration of WebRTC for live sessions, Gemini AI API for on-the-fly code generation and execution via WebContainers, and a ReactJS-powered user interface designed to enhance engagement and streamline feature discovery, making it an innovative tool for efficient team collaboration and rapid development."
              ghLink="https://github.com/Abhik004/chaterly"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img12}
              isBlog={false}
              title="CodeChat"
              description="It is a voice-chat platform inspired by Clubhouse, designed to support seamless real-time communication with WebRTC and Socket.IO, enabling 10+ concurrent voice-chat rooms for up to 20 users per session with ultra-low latency, featuring a scalable backend built with Node.js and MongoDB, and a responsive ReactJS frontend optimized for both mobile and web users, enhancing accessibility and user retention."
              ghLink="https://github.com/Abhik004/code_chat"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img10}
              isBlog={false}
              title="Mock Ai Interview"
              description="Developed a mock interview taker based on your job requirements, skills and experience.Uses Gemini AI API to build the questions. Have features to detect camera and voice."
              ghLink="https://github.com/Abhik004/mock_ai_interview"
              demoLink="https://mock-ai-interview-kappa.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img11}
              isBlog={false}
              title="3D T-Shirt Designer"
              description="Used ThreeJS to simulate a 3d TShirt where users can modify it by changing its colour, upload logo/texture files or use pre defined textures available."
              ghLink="https://github.com/Abhik004/3d_TShirt_Generator"
              demoLink="https://3dtshirtgenerator-abhik004s-projects.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img9}
              isBlog={false}
              title="Botanical Bliss"
              description="A Full Stack E-commerce site for plants, implemented admin and user side rendering along with Payment Gateway."
              ghLink="https://github.com/Abhik004/Botanical_Bliss"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img8}
              isBlog={false}
              title="Chess Game"
              description="A backend project where I explored Socket.io for realtime chess game between two user across device"
              ghLink="https://github.com/Abhik004/Chess_Game"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img7}
              isBlog={false}
              title="Landing Page using GSAP"
              description="Explored GSAP(GreenSock Animation Platform) and SVG animation to create a dynamic landing page!"
              ghLink="https://github.com/Abhik004/Landing_Page"
              demoLink="https://landpage-pfxnequzw-abhik004s-projects.vercel.app/"
            />
          </Col>
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
