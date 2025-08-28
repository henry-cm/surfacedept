import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot
    if (fd.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const params = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      subject: fd.get("subject") || "",
      message: fd.get("message") || "",
      okToText: fd.get("okToText") === "on" ? "Yes" : "No",
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      to_email: "info@surfacedept.com", // this must match {{to_email}} in your template
    };

    try {
      const svc = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const tpl = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
      const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!svc || !tpl || !pub) throw new Error("Missing EmailJS env vars");

      await emailjs.send(svc, tpl, params, { publicKey: pub });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="services-wrapper">
      <div className="service-overlay1"></div>
      <div className="service-container">
        <h1> CONTACT</h1>
        <section className="interior-services">
          {/* Left column: details */}
          <div className="text-column interior-services">
            <h2>How to Reach Us</h2>
            <p>
              Have a quick question, want to discuss scope, or need help
              choosing finishes? Send a note and we’ll respond within{" "}
              <strong>1 business day</strong>.
            </p>

            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@surfacedept.com">info@surfacedept.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+1-416-000-0000">(416) 000-0000</a>
              </li>
              <li>
                <strong>Service Area:</strong> Toronto & GTA
              </li>
              <li>
                <strong>Hours:</strong> Mon–Fri, 8:00–6:00
              </li>
            </ul>

            <h2>What to Include</h2>
            <p>
              For the fastest response, share the property type, areas to be
              painted, timing, and any access details (parking, elevator,
              loading).
            </p>
          </div>

          {/* Right column: form */}
          <div className="text-column">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {status === "success" && (
                <div className="notice success" role="status">
                  Thanks! Your message has been sent. We’ll get back to you
                  within 1 business day.
                </div>
              )}
              {status === "error" && (
                <div className="notice error" role="alert">
                  Sorry—something went wrong. Please try again or email us
                  directly.
                </div>
              )}

              {/* Honeypot (anti-spam) */}
              <input
                type="text"
                name="company"
                className="hp-field"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input"
                    placeholder="(416) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  rows="6"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group checkbox">
                  <input id="okToText" name="okToText" type="checkbox" />
                  <label htmlFor="okToText">
                    Okay to text me about my message
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="button">
                  Send Message
                </button>
                <p className="form-sla">We reply within 1 business day.</p>
              </div>
            </form>
          </div>

          {/* Optional mini-FAQ */}
          <div className="faqs">
            <div className="faq-accordion">
              <div className="accordion-item" tabIndex="0">
                <div className="accordion-question">
                  Do you service my area?
                  <span className="accordion-toggle">+</span>
                </div>
                <div className="accordion-answer">
                  We serve Toronto and most of the GTA. If you’re unsure, send
                  your postal code and we’ll confirm.
                </div>
              </div>
              <div className="accordion-item" tabIndex="0">
                <div className="accordion-question">
                  How fast can you start?
                  <span className="accordion-toggle">+</span>
                </div>
                <div className="accordion-answer">
                  Start dates depend on scope and season. Share your ideal
                  window and we’ll propose the soonest options.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
