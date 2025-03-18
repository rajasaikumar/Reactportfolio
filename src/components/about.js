import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPython } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">

      <Row className="justify-content-center">
        <Col >
          <div className="about my-3 mx-5 px-4 py-5 text-justify">
            <h1 className="text-center mb-4 head">About</h1>
            <h5 className="about-text ">
              To work in an organization that provides opportunities for growth, learning,
              and scope for the implementation of my skills. I aim to offer my best abilities
              to the organization.
              Seeking a position in a competitive environment that challenges me to push
              my boundaries and expand my knowledge in the field of computer science.
            </h5>
            {/* <h5 className="about-text">
              Seeking a position in a competitive environment that challenges me to push
              my boundaries and expand my knowledge in the field of computer science.

            </h5> */}
            <h5 className="about-text">
              I had completed my graduation in the stream of <strong>Computer Science and Engineering </strong> and later pursued<strong> Java Full Stack Development. </strong>

               In 2024 March , I secured an <strong>internship at Metrolabs Pvt. Ltd. Services,</strong> where I worked on<mark> ReactJS and web technologies.</mark>

              Recently,<strong> I had completed a full-time internship at Byteqode Digitals Pvt. Ltd.</strong> Madhapur, where<mark> I gained hands-on experience in ReactJS, Python FastAPI integration, and web technologies.</mark>

              I am currently seeking a job in the IT sector.
            </h5>

          </div>
        </Col>
      </Row>

    </section>
  );
};

export default About;
