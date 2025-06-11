import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import course from "../../Assets/Projects/course.png";
import evaluation from "../../Assets/Projects/evaluation.png";
import hangman from "../../Assets/Projects/hangman.png";
import pacman from "../../Assets/Projects/pacman.png";
import cardio from "../../Assets/Projects/cardio.jpg";
import tutor from "../../Assets/Projects/tutor.png";

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
              imgPath={course}
              isBlog={false}
              title="Course Registration System"
              description="Full-stack web app for course registration with authentication and CRUD using Django and MySQL."
              ghLink="https://github.com/duarizwan25/Course-Registration-System"
            //   demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              isBlog={false}
              title="Pacman Game"
              description="Interactive arcade game using Java Swing and AWT, with object-oriented structure and enemy logic."
              ghLink="https://github.com/duarizwan25/Pacman_Game"
            //   demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutor}
              isBlog={false}
              title="Code Tutor"
              description="A Flutter-based mobile app that helps beginners learn Python with code snippets and intuitive UI."
              ghLink="https://github.com/duarizwan25/python-for-beginners-app"
            //   demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardio}
              isBlog={false}
              title="Cardio-Health Analyzer"
              description="A complete healthcare tool featuring a chatbot, health tracking, and CSV-based record saving."
              ghLink="https://github.com/duarizwan25/cardio-health-analyzer"
             //  demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              isBlog={false}
              title="Hangman Game"
              description="Interactive Hangman Game with logical win and lose cases."
              ghLink="https://github.com/duarizwan25/Hangman_Game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evaluation}
              isBlog={false}
              title="Evaluation System"
              description="Full-stack web app for evaluations with authentication and CRUD using Django and MySQL."
              ghLink="https://github.com/duarizwan25/Evauluation-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
