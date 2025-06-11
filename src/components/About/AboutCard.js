import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Dua Rizwan</span> from{" "}
            <span className="purple">Lahore, Pakistan</span>.
            <br />
            I’m currently pursuing my Bachelor’s in Computer Engineering at UET Lahore.
            <br />
            I’m a tech enthusiast with a love for clean UI, logical systems, and building things that actually solve real-world problems.
            <br />
            <br />
            Besides coding, I vibe with:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing articles on Medium
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing posters & creative stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Making calligraphies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "From ideas to impact — I turn problems into code that actually works."{" "}
          </p>
          <footer className="blockquote-footer">Dua</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
