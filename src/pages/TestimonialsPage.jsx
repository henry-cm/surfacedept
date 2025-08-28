// Services.jsx
import React, { useState } from "react";
import "../styles/Services.css";
import "../styles/AboutPage.css";

const services = [
  {
    title: "Interior Painting",
    description:
      "From touch-ups to full room transformations, we handle walls, ceilings, trim, and doors with clean lines and minimal disruption.",
  },
  {
    title: "Exterior Painting",
    description:
      "Entryways, garage doors, fencing, and small exterior features — painted with seasonal timing and weather-safe materials.",
  },
  {
    title: "Residential",
    description:
      "Condos, apartments, and houses. Flexible scheduling, no mess left behind, and a professional finish you’ll notice.",
  },
  {
    title: "Commercial",
    description:
      "Retail spaces, studios, and offices in need of polish. Night and weekend options available upon request.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-container">
      <h1>SERVICES</h1>

      <section>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-placeholder" />
              <h2 className="service-title" onClick={() => toggle(index)}>
                {service.title}
              </h2>
              <div
                className={`service-description ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
