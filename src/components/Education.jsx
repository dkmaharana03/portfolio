function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Biju Patnaik University of Technology",
      year: "2022 - 2026",
      description:
        "Focused on Java, Data Structures, DBMS, Web Development, and Software Engineering."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Khallikote Higher Secondary School",
      year: "2020 - 2022",
      description:
        "Built strong foundations in Mathematics, Physics, and Computer Science."
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">
        {education.map((item, index) => (
          <div key={index} className="education-card">
            <h3>{item.degree}</h3>
            <h4>{item.institution}</h4>
            <span>{item.year}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;