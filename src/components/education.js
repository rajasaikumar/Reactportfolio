import React from "react";
import { FaArrowRight } from "react-icons/fa";


const Education = () => {
  return (
    <section id="education">
      <div className="education my-3 mx-5">
        <h1 className="text-center heads">🎓 My Education</h1>
        <div className="education-list mt-4">
          <div className="education-item d-flex align-items-center position-relative mt-5">
            <FaArrowRight className="education-icon btech-arrow me-2" />
            <h3><strong>Holy Mary Institute of Technology and Science </strong><br />
              B-Tech in Computer Science and Engineering 
            </h3>
            <h2 className="year ">(2019 - 2023)</h2>
          </div>
          <div className="education-item d-flex align-items-center position-relative mt-5">
            <FaArrowRight className="education-icon college-arrow me-2" />
            <h3><strong>Narayana Junior College</strong><br />MPC </h3>
            <h2 className="years ">(2017 - 2019)</h2>
          </div>
          <div className="education-item d-flex align-items-center position-relative mt-5">
            <FaArrowRight className="education-icon school-arrow me-2" />
            <h3><strong>St. Joseph’s High School</strong><br />SSC</h3>
            <h2 className="yearss ">(2017)</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
