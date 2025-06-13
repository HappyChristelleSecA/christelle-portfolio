import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" class="section contact">
  <h2>Contact Me</h2>
  <form
    class="contact-form"
    action="mailto:durianehappy18@gmail.com"
    method="post"
    enctype="text/plain"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="Name" placeholder="Your name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="Email" placeholder="you@example.com" required />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="Message" rows="5" placeholder="Your message…" required></textarea>
    </div>
    <button type="submit" class="btn submit-btn">Send Message</button>
  </form>
</section>

  );
}
