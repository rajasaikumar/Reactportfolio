import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container-fluid  mx-5  my-2 py-2 d-flex justify-content-center">
        <a className="navbar-brand me-auto blink" href="#">PORTFOLIO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav gap-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="home" smooth={true} duration={500} offset={-100}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500} offset={-90}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500} offset={-110}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="education" smooth={true} duration={500} offset={-90}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500} offset={-110}>Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
