// About.js
import React from "react";
import Work from "../Components/Work";
import "./About.css";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="about-container">
      <section className="about-section">
        <h1 className="section-title">About Me</h1>
        <p className="about-description">{personalDetails.about}</p>
      </section>
      
      <section className="work-section">
        <h1 className="section-title">Work Experience</h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      
      <section className="education-section">
        <h1 className="section-title">Education</h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;