import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education">
      <div className="education my-3 mx-3 mx-md-5">
        <h1 className="text-center heads mb-4">🎓 My Education</h1>

        <div className="education-list">
          <div className="education-item d-flex flex-column flex-md-row align-items-start align-items-md-center mt-4">
            <FaArrowRight className="education-icon btech-arrow me-0 me-md-2 mb-2 mb-md-0" />
            <div className="flex-grow-1">
              <h3>
                <strong>Holy Mary Institute of Technology and Science</strong>
                <br />
                B-Tech in Computer Science and Engineering
              </h3>
            </div>
            <h2 className="year mt-2 mt-md-0">(2019 - 2023)</h2>
          </div>

          <div className="education-item d-flex flex-column flex-md-row align-items-start align-items-md-center mt-4">
            <FaArrowRight className="education-icon college-arrow me-0 me-md-2 mb-2 mb-md-0" />
            <div className="flex-grow-1">
              <h3>
                <strong>Narayana Junior College</strong>
                <br />
                MPC
              </h3>
            </div>
            <h2 className="years mt-2 mt-md-0">(2017 - 2019)</h2>
          </div>

          <div className="education-item d-flex flex-column flex-md-row align-items-start align-items-md-center mt-4">
            <FaArrowRight className="education-icon school-arrow me-0 me-md-2 mb-2 mb-md-0" />
            <div className="flex-grow-1">
              <h3>
                <strong>St. Joseph’s High School</strong>
                <br />
                SSC
              </h3>
            </div>
            <h2 className="yearss mt-2 mt-md-0">(2017)</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
