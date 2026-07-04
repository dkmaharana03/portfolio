import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaBootstrap,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiHibernate,
  SiJavascript,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },        
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "DBMS", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "GitHub", icon: <FaGithub/>},
        { name: "Git", icon: <FaGitAlt /> },
        { name: "AWS", icon: <FaAws /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Arsenals</h2>

      <div className="category-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="category-box">
            <h3>{category.title}</h3>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;