import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Designed and Cooked by{" "}
          <a
            className="footer-link"
            href="https://github.com/dasgajraj"
            target="_blank"
          >
            DAS GAJRAJ SHARMA
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;