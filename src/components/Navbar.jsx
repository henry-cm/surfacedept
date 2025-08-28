import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    if (window.innerWidth <= 768) {
      setServicesOpen(!servicesOpen);
    }
  };

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Surface Dept.</div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeAll}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeAll}>
            About
          </Link>
        </li>

        <li className="services-dropdown">
          <span className="services-toggle" onClick={toggleServices}>
            Services{" "}
            <span className={`arrow ${servicesOpen ? "open" : ""}`}>▼</span>
          </span>

          <ul className={`dropdown-menu ${servicesOpen ? "open" : ""}`}>
            <li>
              <Link to="/services" onClick={closeAll}>
                All Services
              </Link>
            </li>
            <li>
              <Link to="/services/interior" onClick={closeAll}>
                Interior
              </Link>
            </li>
            <li>
              <Link to="/services/exterior" onClick={closeAll}>
                Exterior
              </Link>
            </li>
            <li>
              <Link to="/services/residential" onClick={closeAll}>
                Residential
              </Link>
            </li>
            <li>
              <Link to="/services/commercial" onClick={closeAll}>
                Commercial
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/gallery" onClick={closeAll}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeAll}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/quote" onClick={closeAll}>
            Quote
          </Link>
        </li>
      </ul>

      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
