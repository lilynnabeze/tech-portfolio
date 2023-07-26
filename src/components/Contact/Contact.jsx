import { useState } from "react";
import "../Contact/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formData }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contactsection-header">
        <h1 className="contactsection-title">Want to Work with Me?</h1>
        <span className="contactsection-title-background">CONTACT ME</span>
      </div>
      <div className="gif-container">
        <div className="animated-text">Let&apos;s Connect!</div>
      </div>
      <div className="form-container">
        <form name="contact" onSubmit={handleSubmit} method="post" data-netlify="true">
          <div className="form-input form-namefield">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="form-input form-emailfield">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email*"
              required
            />
          </div>
          <div className="form-input form-phonefield">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Telephone*"
              required
            />
          </div>
          <div className="form-input form-messagefield">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message*"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-submitbutton">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
