import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
    >
      <section className="services" id="services">
        <h2 className="heading">Services</h2>

        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>UI design</h4>
              <p>
                I'm a skilled UI Designer with expertise in Figma, Canva, Adobe
                XD, HTML, CSS, and JavaScript. I specialize in creating visually
                stunning and user-friendly designs that enhance user
                experiences. Whether you need wireframes, prototypes, or
                complete UI designs, I offer professional services to bring your
                digital projects to life. Let's collaborate to create something
                exceptional!
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Developer</h4>
              <p>
                I'm a proficient Frontend Developer specializing in React. With
                expertise in HTML, CSS, and JavaScript, I build dynamic,
                responsive, and high-performance web applications. Whether you
                need interactive user interfaces, single-page applications, or
                seamless front-end integrations, I offer professional services
                to elevate your digital projects. Let's collaborate to bring
                your ideas to life with React!
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>.NET Developer</h4>
              <p>
                I am a dedicated .NET Developer with extensive experience in C#
                development using Visual Studio. My expertise lies in building
                robust, scalable, and high-performance applications. I
                specialize in creating seamless and efficient software
                solutions, leveraging the full power of the .NET framework.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Wordpress Developer</h4>
              <p>
                With over 3 years of experience as a WordPress developer, I
                offer expert services to create and customize dynamic,
                user-friendly websites. Whether you need a stunning new site or
                enhancements to an existing one, I specialize in delivering
                high-quality, responsive designs and seamless functionality
                tailored to your needs. Let me transform your vision into a
                powerful online presence!
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
