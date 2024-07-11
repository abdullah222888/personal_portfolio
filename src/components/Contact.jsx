import React, { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Your message has been delivered successfully, and I will respond to you shortly. Thank you so much!"
    );

    // Reset the form fields
    formRef.current.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full-Name" required />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Phone-Number" required />
            <input type="text" placeholder="Subject" required />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
