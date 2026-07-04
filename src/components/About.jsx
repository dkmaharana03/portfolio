function About() {
  return (
    <section id="about" className="about">
      {/* Left Side */}
      <div className="about-left">
        <h2>About Me</h2>

        <div className="about-block">
          <h3>Code Philosophy</h3>
          <p>
            I believe software should be clean, scalable, and easy to maintain.
            My focus is not just writing code, but engineering solutions that
            stay reliable and efficient in the long run.
          </p>
        </div>

        <div className="about-block">
          <h3>Developer Journey</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span>2022</span>
              <p>Started with Java and programming fundamentals.</p>
            </div>

            <div className="timeline-item">
              <span>2023</span>
              <p>Built strong foundations in DSA, DBMS, and OOP.</p>
            </div>

            <div className="timeline-item">
              <span>2024</span>
              <p>Started building full-stack applications with Spring Boot & React.</p>
            </div>

            <div className="timeline-item">
              <span>2025</span>
              <p>Exploring AWS, AI-powered tools, and scalable architectures.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="about-right">
        <div className="about-card">
          <h3>Current Focus</h3>
          <ul>
            <li>AWS Cloud Architecture</li>
            <li>Backend Development</li>
            <li>Microservices Architecture</li>
            <li>AI-powered Development</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>What Drives Me</h3>
          <ul>
            <li>Building scalable backend systems</li>
            <li>Optimizing APIs and databases</li>
            <li>Solving complex engineering problems</li>
            <li>Learning future-ready technologies</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Beyond Coding</h3>
          <p>
            Strategic thinker, constant learner, and someone who enjoys turning
            complex logic into simple and impactful user experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>Key Interests</h3>
          <ul>
            <li>Plays Chess</li>
            <li>Indulge in Physical Activities</li>
            <li>Participates in Social Activities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;