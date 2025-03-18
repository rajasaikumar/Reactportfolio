import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { useEffect } from "react";


const Home = () => {

  useEffect(() => {
    document.title = "Sai Kumar Portfolio"; 
  }, []);

  return (
    <section id="home">
      <div className="home">
        <div className="row justify-content-start  text-center min-vh-100 ">
          <div className="col-md-7 ">
            <h1>
              <span className="wave">Hii, This is</span>
              <span className="typing"> Sai Kumar Raja</span>
            </h1>
            <h4 className=""><strong>Frontend Developer</strong>, Web Technologies, API Integration,<strong>React Js </strong><br />Backend (Python), Core Java, Basics of Advanced Java</h4>
            <a href="https://linkedin.com/in/sai-kumar-ba659820b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social mt-4 mx-4" />
            </a>

            <a href="https://github.com/rajasaikumar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="socials mt-4" />
            </a>

            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social mt-4 mx-4" />
            </a>

            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="socials mt-4 mx-4" />
            </a>



          </div>
          <div className="col-md-5 d-flex flex-column align-items-center text-center">
            <div className="image-container ">
            {/* <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" /> */}

            <img src={`${process.env.PUBLIC_URL}/images/saiimage.jpeg`} alt="Profile" className="img-fluid rounded-circle" />

            </div>
            <div className="button-container">
              <a href="/resume.pdf" download="SaiKumar_Resume.pdf" className="btn btn-primary mt-3 mx-3 download-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
