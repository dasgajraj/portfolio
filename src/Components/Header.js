import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="https://www.linkedin.com/in/das-gajraj-sharma-647818299/" className="logo">
          Linked in
        </Link>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/Technologies">Technologies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;