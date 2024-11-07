// Technologies.js
import React from "react";
import "./Technologies.css";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html, css, js, react, 
    vscode, git, github, npm,figma,
  } = techStackDetails;

  const techStack = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: js, title: "JavaScript" },
    { src: react, title: "React" },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code" },
    { src: git, title: "Git" },
    { src: github, title: "Github" },
    { src: figma, title: "Figma" },
    { src: npm, title: "NPM" },
  ];

  return (
    <main className="tech-container">
      <section className="tech-intro">
        <h1 className="section-title">Tech Stack</h1>
        <p className="section-description">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="tech-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img 
              src={tech.src} 
              alt={tech.title} 
              title={tech.title} 
              className="tech-icon"
            />
          </div>
        ))}
      </section>

      <section className="tools-intro">
        <h1 className="section-title">Tools</h1>
      </section>

      <section className="tech-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tech-item">
            <img 
              src={tool.src} 
              alt={tool.title} 
              title={tool.title} 
              className="tech-icon"
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;