import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h3>Dhruv Kumar</h3>
          <p>Crafting robust full-stack solutions with clean code, performance, and scalability.</p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificate</a>
        </div>

        {/* Right */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <a href="https://github.com/dkmaharana03" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-kumar-maharana-523091359/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_.dkmaharana._/" target="_blank" rel="noreference">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dhruv Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;