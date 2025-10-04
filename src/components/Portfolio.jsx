// src/components/Portfolio.jsx
import React from "react";
import "./Portfolio.css";
import myPhoto from "../assets/me.jpg";
import usePortfolioEffects from "../hooks/usePortfolioEffects";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Portfolio() {
  usePortfolioEffects();

  return (
    <div className="portfolio">
      {/* Hero / Intro */}
      <section className="hero section">
        <div className="hero-content reveal">
          <img src={myPhoto} alt="Satyashil Gaur" className="profile-pic" />
          <h1 className="hero-title">
            Hi, I'm <span className="accent">Satyashil Gaur</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer | Data Analyst | Problem Solver
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Satyashil1210" target="_blank" rel="noreferrer"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/satyashil-gaur-5bb1b72b5" target="_blank" rel="noreferrer"><SiLinkedin /></a>
            <a href="mailto:satyashil999@gmail.com"><FiMail /></a>
            <a href="tel:+919140110788"><FiPhone /></a>
          </div>
        </div>
      </section>

      {/* About / Career Objective */}
      <section className="section reveal" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate <b>Full-Stack Developer</b> and <b>Data Enthusiast</b> with hands-on experience in building
          scalable web applications and interactive dashboards. My work focuses on creating real-world solutions using 
          <b> React, Node.js, MongoDB, and Power BI</b>. I enjoy analyzing data to drive actionable insights and continuously improving
          my technical and problem-solving skills.
        </p>
        <p>
          I thrive in collaborative environments, take ownership of challenges, and aim to deliver products with both quality and efficiency.
          My goal is to combine <b>innovative development and data-driven decision-making</b> to create impactful digital solutions.
        </p>
      </section>

      {/* Education */}
      <section className="section reveal" id="education">
        <h2>Education</h2>
        <ul className="info-list">
          <li><b>B.Tech (CSE)</b>, IET Lucknow — <span className="accent">8.05 CGPA</span> (2023–2026)</li>
          <li><b>Diploma (Automobile Engg.)</b>, Town Polytechnic Ballia — <span className="accent">75.2%</span> (2019–2022)</li>
          <li><b>Class X (CBSE)</b>, Naga Ji Saraswati Vidya Mandir — <span className="accent">85.6%</span> (2019)</li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="section reveal" id="skills">
        <h2>Technical Skills & Tools</h2>
        <div className="skills-grid">
          <div><b>Languages:</b> C++, Python, SQL, JavaScript (ES6+), HTML, CSS</div>
          <div><b>Frameworks / Libraries:</b> React.js, Node.js, Express.js</div>
          <div><b>Databases:</b> MongoDB, MySQL</div>
          <div><b>Data Tools:</b> Power BI, MS Excel, Tableau (Basics)</div>
          <div><b>Version Control & Tools:</b> Git, GitHub, Postman, VS Code</div>
          <div><b>Soft Skills:</b> Communication, Teamwork, Analytical Thinking, Problem-Solving</div>
          <div><b>Other Highlights:</b> API Integration, Responsive Design, Agile Methodology, RESTful Architecture</div>
        </div>
      </section>

      {/* Projects */}
      <section className="section reveal" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>📚 Library Management System</h3>
            <p>
              Role-based MERN stack application with JWT authentication, REST APIs, 
              book issue/return management, and advanced search functionality. Focused on delivering a secure, user-friendly experience.
            </p>
            <a href="https://github.com/Satyashil1210" target="_blank" rel="noreferrer" className="link-btn">GitHub Repo</a>
          </div>
          <div className="project-card">
            <h3>🏦 HoonBank – Responsive Banking Dashboard</h3>
            <p>
              Built a responsive React dashboard with Context API, interactive charts, and mobile-first UI. Includes transaction tracking,
              account summaries, and visual insights for better financial decisions.
            </p>
            <a href="https://github.com/Satyashil1210" target="_blank" rel="noreferrer" className="link-btn">GitHub Repo</a>
          </div>
          <div className="project-card">
            <h3>📊 Sales Analytics Dashboard</h3>
            <p>
              Power BI dashboard with DAX measures, KPIs, slicers, and drill-down insights for business performance monitoring.
              Optimized for stakeholder-friendly reporting and actionable insights.
            </p>
            <a href="https://github.com/Satyashil1210" target="_blank" rel="noreferrer" className="link-btn">GitHub Repo</a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section reveal" id="achievements">
        <h2>Achievements</h2>
        <ul className="info-list">
          <li>Presented research paper at a <b>National-level Seminar</b> representing East U.P.</li>
          <li>Completed <b>4-month technical training at Hindustan Aeronautics Limited</b></li>
          <li>Organized and coordinated multiple <b>cultural & technical events</b> at college</li>
          <li>Developed and delivered <b>mini-projects for student workshops</b> to enhance coding skills</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="section reveal" id="contact">
        <h2>Contact Me</h2>
        <p>
          Interested in collaboration, internships, or full-time opportunities? Let's connect!
        </p>
        <div className="contact-buttons">
          <a href="mailto:satyashil999@gmail.com" className="btn">Email Me</a>
          <a href="tel:+919140110788" className="btn outline">Call</a>
          <a href="https://github.com/Satyashil1210" target="_blank" rel="noreferrer" className="btn outline">GitHub</a>
          <a href="https://www.linkedin.com/in/satyashil-gaur-5bb1b72b5" target="_blank" rel="noreferrer" className="btn outline">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 — Designed & Built by <span className="accent">Satyashil Gaur</span>
      </footer>
    </div>
  );
}
