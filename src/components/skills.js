import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills">
      <Container className="hii">
        <h1 className="text-center mb-4 head">My Skills</h1>
        <Row className="justify-content-center ">
          <Col md={6} lg={3}>
            <div className="card text-center skill-card bg-dark pt-3">
              <div className="card-body">
                <FaPython className="skill-icon mb-3" />
                <h5 className="card-title text-white pt-3">Python</h5>
              </div>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="card text-center skill-card bg-dark pt-3">
              <div className="card-body">
                <RiReactjsFill className="skill-icons mb-3" />
                <h5 className="card-title text-white pt-3">React Js</h5>

              </div>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="card text-center skill-card bg-dark pt-3">
              <div className="card-body">
                <FaJava className="skill-icon mb-3" />
                <h5 className="card-title text-white pt-3">Java</h5>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="card text-center skill-card bg-dark pt-3">
              <div className="card-body">
                <FaBootstrap className="skill-ico mb-3" />
                <h5 className="card-title text-white pt-3">Bootstrap</h5>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="card text-center skill-card mt-3 bg-dark pt-3">
              <div className="card-body">
                <TbBrandJavascript className="skill-ic mb-3" />
                <h5 className="card-title text-white pt-3">Java Script</h5>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="card text-center skill-card mt-3 bg-dark pt-3">
              <div className="card-body">
                <FaHtml5 className="skill-i mb-3" />
                <h5 className="card-title  text-white pt-3">Html</h5>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="card text-center skill-card mt-3 bg-dark pt-3">
              <div className="card-body">
                <FaCss3Alt className="skill mb-3" />
                <h5 className="card-title text-white pt-3">Css</h5>
              </div>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="card text-center skill-card mt-3 bg-dark pt-3">
              <div className="card-body">
                <FaGitAlt className="skil mb-3" />
                <FaGithubSquare className="skil mb-3" />
                <h5 className="card-title text-white pt-3 ">Git & GitHub</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
