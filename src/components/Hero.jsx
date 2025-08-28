import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div>
        <h1 className="hero-title">SURFACE DEPT.</h1>
        <div className="full-hero-content">
          <div className="hero-content">
            <h1 className="hero-tagline">
              Toronto's Surface Painting Specialists
            </h1>
            <p className="hero-summary">
              We handle single rooms, full units, and small commercial spaces
              across the GTA. Our process is simple: assess, scope, schedule,
              protect, prep, paint, clean.
            </p>

            {/* Contact Info
            <div className="hero-contact-info">
              <p>
                📞 <a href="tel:6478727922">647-872-7922</a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@surfacedept.com">info@surfacedept.com</a>
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="hero-cta1">
        <a href="/quote" className="hero-cta">
          Get a Free Quote
        </a>
        <a href="/contact" className="hero-cta contact-btn">
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
