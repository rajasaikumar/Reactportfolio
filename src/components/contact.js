import React from 'react';


const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container bg-black text-white text-center py-5 mx-5">
        <h2 className="contact-title">📞 Contact Me</h2>

        <div className="contact-boxes">
          <div className="contact-box">
            <h3 className='blinks'>Email</h3>
            <p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saikumar54722@gmail.com&su=Job Inquiry&body=Hello, I would like to discuss an opportunity."
                className="email-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                saikumar54722@gmail.com
              </a>
              <p>Click here to send a Mail</p>
            </p>
          </div>
          <div className="contact-box">
            <h3 className='blinks'>Phone</h3>
            <p>+91 6309401182.</p>
          </div>
        </div>

        <div className="middle-box">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out for any inquiries!</p>
        </div>
        <div>
  <footer>
    <p className="text-white mt-5 py-3 bg-secondary foot">
      © {new Date().getFullYear()} Sai Kumar. All rights reserved.
    </p>
  </footer>
</div>

      </div>
    </section>
  );
};

export default Contact;
