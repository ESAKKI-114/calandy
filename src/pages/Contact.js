import React from 'react';
import '../components/CSS/Contact.css'; // Optional: style your contact page

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <section className="contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions, want a quote, or need a custom design? Fill out the form below or reach us directly!
          </p>
          <ul>
            <li><strong>Phone:</strong> +91 95655 03920</li>
            <li><strong>Email:</strong> karthickcalendars2020@gmail.com</li>
            <li><strong>Address:</strong>2/806B1, ThandayuthaPuram,Sivakasi - 626189</li>
          </ul>
        </div>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" disabled placeholder="Static form (for demo)" />
          </label>
          <label>
            Email:
            <input type="email" name="email" disabled placeholder="Static form (for demo)" />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" disabled placeholder="Static form (for demo)" />
          </label>
          <button type="submit" disabled>Send Message</button>
          <p className="contact-note">
            (Demo only — please use the phone/email for real inquiries.)
          </p>
        </form>
      </section>
    </div>
  );
};

export default Contact;
