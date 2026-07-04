import profileImg from "../assets/Profile.png";
import resumeFile from "../assets/Dhruv Kumar Maharana CV.pdf";
import coverletterFile from "../assets/Dhruv Kumar Maharana CL.pdf"
import {
  FaJava,
  FaReact,
  FaAws,
  FaJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql
} from "react-icons/si";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Left Side */}
      <div className="hero-content">
        <p className="hero-intro">Heyy, I am</p>

        <h1>Dhruv Kumar</h1>
        <h1>Maharana</h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Passionate about building efficient, scalable, and user-friendly web
          applications with modern technologies.
        </p>

        <div className="tech-stack">
          <FaJava />
          <SiSpringboot />
          <SiHibernate />
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaJs />
          <FaBootstrap />
          <FaDatabase />
          <SiMysql />
          <FaAws />
          <FaGithub />
        </div>

        <div className="hero-buttons">
          <a href={resumeFile} download="Dhruv_KM_CV.pdf" className="resume-btn">Download CV</a>
          <a
            href={coverletterFile}
            target="_blank"
            rel="noopener noreferrer"
            className="coverletter-btn"
          >
            Cover Letter
          </a>
        </div>

      </div>


      {/* Right Side */}
      <div className="hero-image">
        <div className="img-box">
          <img src={profileImg} className="profile-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;