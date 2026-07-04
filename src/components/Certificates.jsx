import { useState } from "react";
import msccertificate from "../assets/certificates/Dhruv_Kumar_Maharana_Training Certificate.pdf";
import deloittecertificate from "../assets/certificates/deloitte-certificate.pdf";
import ibmcertificate from "../assets/certificates/ibm-certificate.pdf";
import jspidercertificate from "../assets/certificates/JSpider Certificate.pdf";
import hackathoncertificate from "../assets/certificates/NexTech_1.O.pdf"

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Certificate of Completion: Software Development Intern",
      issuer: "MSC Hiretech",
      date: "Jan 2025",
      link: msccertificate,
    },
    {
      title: "Certificate of Completion: Introduction to Data Science",
      issuer: "Coursera",
      date: "Jun 2025",
      link: ibmcertificate,
    },
    {
      title: "Certificate of Completion: Data Analytics Job Simulation",
      issuer: "Forage",
      date: "July 2025",
      link: deloittecertificate,
    },
    
    {
      title: "Certificate of Paticipation: NexTech 1.0 Hackathon for IAF",
      issuer: "NM Institute Of Engineering & Technology",
      date: "Sept 2025",
      link: hackathoncertificate,
    },
    {
      title: "Certificate of Completion: Java Full Stack Developer Intern",
      issuer: "JSpider ",
      date: "March 2026",
      link: jspidercertificate,
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certifications</h2>

      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <span>{cert.date}</span>

            <button
              className="view-btn"
              onClick={() => setSelectedCert(cert.link)}
            >
              View Credential
            </button>
          </div>
        ))}
      </div>

      {/* Floating PDF Modal */}
      {selectedCert && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="certificate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <iframe
              src={selectedCert}
              title="Certificate Preview"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;