import profile from "./assets/profile.jpg";

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";

import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";

export const personalDetails = {
  name: "Das Gajraj Sharma",
  tagline: "Let's Develop Your Own World",
  img: profile,
  about: `I’m Das Gajraj Sharma, a passionate developer skilled in C++, C, and React. I enjoy building user-friendly apps, like the e-Canteen Customer App, that enhance user convenience. My experience spans UI/UX design, Firebase authentication, and data structures. Constantly upskilling through hackathons and hands-on projects, I’m dedicated to crafting impactful, intuitive tech solutions.`,
};

export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/das-gajraj-sharma-647818299/",
  github: "https://github.com/dasgajraj",
  instagram: "https://www.instagram.com/_dasgajraj/",
};

export const workDetails = [
  {
    Position: "Open Source Contributor",
    Company: `GSoC`,
    Location: "OnLine",
    Type: "Internship",
    Duration: "Jan 2025 - April 2025",
  },

];

export const eduDetails = [
  {
    Position: " B.Tech in Computer Science and Engineering (Data Science)",
    Company: "Guru Tegh Bahadur Institute of Technology",
    Location: " G-8 Area, Press Colony, Rajouri Garden, New Delhi:, Delhi, 110064",
    Type: "Regular Degree",
    Duration: "Jan 2023 - Present",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "E-Canteen",
    image: projectImage1,
    description: `The e-Canteen Customer App is a React Native prototype designed to provide an online platform for customers to order food and beverages from a canteen or cafeteria. This is a customer-side app, and a merchant app will be developed in the future.`,
    techstack: "HTML/CSS, React Native, Firebase Authenticaion",
    previewLink: "#",
    githubLink: "https://github.com/dasgajraj/E-Canteen",
  },
  {
    title: "Cargo Bot",
    image: projectImage2,
    description: ` The CARGO BOT is an innovative robot that autonomously follows users, carries weight, and attaches to metal surfaces, making it ideal for both personal and commercial use. Equipped with features like Obstacle Detection, Fall Detection and Human Following, Cargo Bot is cost-effective and customizable for environments like airports and malls.`,
    techstack: "C, IoT,Arduino IDE",
    previewLink: "#",
    githubLink: "https://github.com/dasgajraj/",
  },
  {
    
    title: "kraVen",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
    project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Calculator",
    image: projectImage4,
    description: ' I contributed to the development of a calculator project as part of the GTBIT GDG, where I focused on building a user-friendly, feature-rich interface with smooth functionality. The project aimed to provide an intuitive and efficient calculation experience, incorporating advanced features like scientific and memory functions. My role involved ensuring seamless integration and optimizing the user interface for better accessibility.',
    previewLink: "#",
    githubLink: "https://github.com/dasgajraj/Hacktoberfest-2024-Appdev/tree/main/react-native/calculator-app",
  },
];

export const contactDetails = {
  email: "dasgajraj1@gmail.com",
  phone: "+91 12345 67890",
};