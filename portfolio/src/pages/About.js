// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-container single-column">
        <div className="about-card glass-card">
          <h1 id="about-heading">Hi, I'm amine souissi</h1>
          <p className="tagline">Student in software architect engineering with experience in full stack development.</p>

          <div className="skill-block">
            <h2 className="sr-only">Core Competencies</h2>
            <p className="competencies"><strong>Core Competencies:</strong> Web Development, System Design, REST APIs, Microservices, WebSocket</p>
          </div>

          <div className="badges-grid" aria-hidden="false">
            <div>
              <h3>Programming</h3>
              <ul className="badges">
                <li className="badge">Python</li>
                <li className="badge">JavaScript</li>
                <li className="badge">PHP</li>
                <li className="badge">Java</li>
                <li className="badge">TypeScript</li>
                <li className="badge">C++</li>
              </ul>
            </div>

            <div>
              <h3>Automation & Testing</h3>
              <ul className="badges">
                <li className="badge">Pytest</li>
                <li className="badge">Postman</li>
                <li className="badge">Selenium</li>
                <li className="badge">Unit Testing</li>
                <li className="badge">JUnit</li>
              </ul>
            </div>

            <div>
              <h3>DevOps / Cloud</h3>
              <ul className="badges">
                <li className="badge">Docker</li>
                <li className="badge">Jenkins</li>
                <li className="badge">GitHub Actions</li>
                <li className="badge">TeamCity</li>
                <li className="badge">Terraform</li>
                <li className="badge">Kubernetes</li>
                <li className="badge">GCP</li>
                <li className="badge">Ansible</li>
                <li className="badge">Apache</li>
                <li className="badge">Firebase Hosting</li>
              </ul>
            </div>

            <div>
              <h3>Frontend</h3>
              <ul className="badges">
                <li className="badge">Angular</li>
                <li className="badge">Flutter</li>
                <li className="badge">React</li>
              </ul>
            </div>

            <div>
              <h3>Backend</h3>
              <ul className="badges">
                <li className="badge">Django</li>
                <li className="badge">Symfony</li>
                <li className="badge">Spring Boot</li>
                <li className="badge">Flask</li>
                <li className="badge">Supabase</li>
              </ul>
            </div>

            <div>
              <h3>Databases & Tools</h3>
              <ul className="badges">
                <li className="badge">PostgreSQL</li>
                <li className="badge">MongoDB</li>
                <li className="badge">Firebase</li>
                <li className="badge">SQLite</li>
                <li className="badge">Git</li>
                <li className="badge">Figma</li>
                <li className="badge">Jira</li>
                <li className="badge">Markdown</li>
                <li className="badge">Confluence</li>
              </ul>
            </div>
          </div>

          <div className="cta-row">
            <a className="btn" href="https://drive.google.com/file/d/1KDBTxzfKkKullEzV8sJrtXbUXYihWMTm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a className="btn btn-outline" href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
