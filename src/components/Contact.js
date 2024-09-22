import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact <span>Me</span></h2>
        <p>Let's work together! Feel free to reach out via the form below or connect with me on social media.</p>
        <form action="mailto:jaffindurai29@gmail.com" method="post" encType="text/plain">
          <div className="input-box">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
