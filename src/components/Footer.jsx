import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-name">Surface Dept.</div>
          <p className="brand-tagline">Toronto surface painting specialists.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-col">
            <h4 className="footer-head">Pages</h4>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-head">Services</h4>
            <ul className="footer-list">
              <li>
                <Link to="/services">All Services</Link>
              </li>
              <li>
                <Link to="/services/interior">Interior</Link>
              </li>
              <li>
                <Link to="/services/exterior">Exterior</Link>
              </li>
              <li>
                <Link to="/services/residential">Residential</Link>
              </li>
              <li>
                <Link to="/services/commercial">Commercial</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-head">Get Started</h4>
            <ul className="footer-list">
              <li>
                <Link to="/quote" className="quote-link">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <a
                  href="tel:+16478727922"
                  aria-label="Call Surface Dept at 6 4 7 8 7 2 7 9 2 2"
                >
                  647-872-7922
                </a>
              </li>
              <li>
                <a href="mailto:info@surfacedept.com">info@surfacedept.com</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {year} Surface Dept.</span>
        <span className="dot">•</span>
        <span>Toronto, ON</span>
      </div>
    </footer>
  );
};

export default Footer;
