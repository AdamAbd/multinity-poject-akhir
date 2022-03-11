import React from "react";

function Contact() {
  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">
        Kamu dapat menghubungiku dibwah ini:
      </p>
      <ul>
        <li>Wa: 081234567890</li>
        <li>Email: adam@adam.com</li>
      </ul>
      <p className="section-description">
        Atau melihat aku pansos di sosmed ini:
      </p>
      <ul>
        <li>
          <a href="http://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="http://instagram.com">Instagram</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
