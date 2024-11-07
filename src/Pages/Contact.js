// Contact.js
import React from "react";
import "./Contact.css";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="contact-container">
      <h1 className="contact-heading">
        For any questions please drop a mail
      </h1>
      <h3 className="contact-email">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="contact-or">or</span>
      <h3 className="contact-phone">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;