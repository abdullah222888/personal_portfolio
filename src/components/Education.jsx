import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
    >
      <section className="education" id="education">
        <h2 className="heading">Education</h2>

        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017-18</div>
            <div className="timeline-content">
              <h3>School</h3>
              <p>
                I completed my schooling from New Habib Public School, Karachi,
                with a focus on Computer Science, achieving an A grade. This
                educational experience laid a strong foundation in computing
                fundamentals and problem-solving skills, which continue to
                influence my career path positively.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019-20</div>
            <div className="timeline-content">
              <h3>College</h3>
              <p>
                I completed my high school education at Degree Boys College
                Bufferzone, Karachi with Pre-Engineering where I graduated with
                an A grade. This strong academic foundation has equipped me with
                the critical thinking and problem-solving skills essential for
                my professional career.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021-25</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>
                I am currently in my 6th semester at NFC Institute of
                Engineering and Technology, Multan, pursuing a degree in
                Software Engineering. My CGPA till now is 3.72. This rigorous
                academic program has provided me with a solid foundation in
                software development principles, preparing me to excel in my
                professional endeavors.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Mern-Stack-Development</h3>
              <p>
                I am a certified MERN stack developer, having received my
                certification from PNY Trainings, Multan. This comprehensive
                training equipped me with expertise in MongoDB, Express.js,
                React.js, and Node.js, enabling me to build full-stack web
                applications efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
