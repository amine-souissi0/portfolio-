// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  // Use a mailto form action so the user's email client opens with a prefilled message.
  // The form builds a mailto: URL on submit using the user's input (simple approach).
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to reach me about my portfolio, send an email and I'll reply as soon as I can.</p>
      <form
        action={`mailto:aminisouissi@gmail.com?subject=${encodeURIComponent('Portfolio inquiry')}&body=`}
        method="GET"
        encType="text/plain"
      >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me what you'd like to discuss" rows="6"></textarea>

        <button type="submit">Send</button>
      </form>
      <p className="note">Or email me directly at <a href="mailto:aminisouissi@gmail.com">aminisouissi@gmail.com</a></p>
    </section>
  );
};

export default Contact;
