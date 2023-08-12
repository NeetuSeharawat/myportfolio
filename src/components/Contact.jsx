import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdue83d",
        "template_0m5l065",
        form.current,
        "Ya_6TBxAoqDIYFpwh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <h2>Get In Touch With Me</h2>
      <div className="contact-form-container">
        <div className="contact-form">
         
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter Your Name"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter Your Email"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                className="input-field"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value="Submit"
              id="submit-btn"
              className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
