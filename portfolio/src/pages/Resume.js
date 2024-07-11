// src/pages/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Professional Experience</h3>
        <ul>
          <li>
            <strong>Full Stack Web Developer - Beograd</strong>
            <p>Developed an e-commerce website for beauty products. Technologies: Node.js, React.js, Express.js, JavaScript, MongoDB, Angular, GitHub.</p>
          </li>
          <li>
            <strong>Full Stack Web Developer - Tritux</strong>
            <p>Website maintenance for Tritux. Technologies: Node.js, Express.js, Vue.js, Flutter.</p>
          </li>
        </ul>
      </div>
      <div className="resume-section">
        <h3>Education</h3>
        <ul>
          <li>ESPRIT, Bachelor in Computer Science, 2019-2020</li>
          <li>ESPRIT, Applied Superior Technician in Computing Technology, 2016-2020</li>
        </ul>
      </div>
      <div className="resume-section">
        <h3>Skills</h3>
        <ul>
          <li>Languages: Java, JavaScript, C, Python</li>
          <li>Frameworks: Angular, Spring, Django</li>
          <li>Libraries: React.js, Node.js</li>
          <li>Databases: MySQL, PostgreSQL, MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
