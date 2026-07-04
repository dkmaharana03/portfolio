import "../index.css";
import { FaCheckCircle } from "react-icons/fa";

function Thanku() {
  return (
    <section className="thankyou-section">
      <div className="thankyou-card">
        <FaCheckCircle className="thankyou-icon" />

        <h1>Thank You!</h1>

        <p>
          Your message has been sent successfully.  
          I’ll get back to you as soon as possible.
        </p>

        <a href="/" className="thankyou-btn">
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default Thanku;