// Home.js
import React from "react";
import "./Home.css";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  return (
    <main className="home-container">
      <div className="home-text">
        <h1 className="home-greeting">
          Hello Worldd !!,👋<br />
          My Name is<br />
        </h1>
        <h1 className="home-name">
          {name}
        </h1>
        <h2 className="home-tagline">
          {tagline}
        </h2>
      </div>
      <div className="home-image-container">
        <img className="home-image" src={img} alt="Profile" />
      </div>
    </main>
  );
}

export default Home;