function WorkExp() {
  const experiences = [
    {
      role: "Java Full Stack Developer Trainee",
      company: "Test Yantra",
      duration: "Dec 2025 - Present",
      description:
        "Worked on backend APIs using Spring Boot, integrated SQL databases, built frontend components using React to develope a Food Ordering application to which is independent of review system to promote street food vendors which is fast to deliver the order. Also by using JSP, for integrating the logic for bill along with QR code scanner for immediate payment."
    },
    {
      role: "Software Developer Intern",
      company: "MSC Hiretech",
      duration: "June 2024 - Jan 2025",
      description:
        "Worked on building a NEWS broadcasting application where they can able to handle the admin side portal for publishing the daily news and uploading the everyday newspaper on a seperate E-Paper Navbar where user able to download the pdf file of newspaper directly along maintaining it's database to be frequently available when searched across the dates."
    }
  ];

  return (
    <section id="work" className="work">
      <h2>Work Experience</h2>

      <div className="work-container">
        {experiences.map((exp, index) => (
          <div key={index} className="work-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span>{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExp;