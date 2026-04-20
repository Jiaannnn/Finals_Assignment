import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="page contact-page">
      <h1>Contact Support</h1>
      <p>If you encounter any issues with the Todo Management System, please reach out.</p>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
        <input type="text" placeholder="Your Name" required className="todo-input" />
        <input type="email" placeholder="Your Email" required className="todo-input" />
        <textarea placeholder="Your Message" required className="todo-input" rows={5}></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
