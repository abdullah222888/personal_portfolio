import React, { useRef } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
    >
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
    </motion.div>
  );
};

export default Contact;
