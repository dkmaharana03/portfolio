import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "../index.css";

function Contact() {


  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>Let’s build something amazing together.</p>
      </div>
      <div className="contact-wrapper">

        {/* Left Side */}
        <div className="contact-left">
          <div className="contact-info-box">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>dhruvk.maharana.work@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-box">
            <div className="icon-box">
              <FaWhatsapp />
            </div>
            <div>
              <h4>Username</h4>
              <p>_.dkmaharana03._</p>
            </div>
          </div>

          <div className="contact-info-box">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Location</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <form
            className="contact-form"
            action="https://formspree.io/f/xpqgkbve"
            method="POST"
          >
            <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;