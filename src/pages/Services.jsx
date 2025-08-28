import React from "react";
import "../styles/Services.css";
import commercialImg from "../assets/services/commercial.jpg";
import interiorImg from "../assets/services/interior.jpg";
import exteriorImg from "../assets/services/exterior.jpg";
import residentialImg from "../assets/services/residential.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Interior Painting",
    description:
      "Detailed prep and hand-painted finishes for walls, ceilings, kitchens, cabinets, and more.",
    image: interiorImg,
    path: "/services/Interior",
  },
  {
    title: "Exterior Painting",
    description:
      "All-season, weather-resistant coatings for siding, decks, porches, garages, doors, and more.",
    image: exteriorImg,
    path: "/services/exterior",
  },
  {
    title: "Residential Painting",
    description:
      "Interior and exterior house painting for bedrooms, living areas, doors, trim, fences, and more.",
    image: residentialImg,
    path: "/services/residential",
  },
  {
    title: "Commercial Painting",
    description:
      "Clean and efficient painting for offices, studios, rentals, storefronts, hallways, and more.",
    image: commercialImg,
    path: "/services/commercial",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="service-overlay"></div>
      <div className="services-content">
        <h1 className="services-heading">OUR SERVICES</h1>
        <div className="services-all">
          <div className="services-disc">
            At Surface Dept., painting isn’t just about colour — it’s about
            precision, trust, and lasting results. We offer full-service
            painting for residential and commercial clients across the Greater
            Toronto Area. Whether you’re updating a single room, refreshing a
            storefront, or doing a full property transformation, we bring
            consistency, care, and craftsmanship to every project.
          </div>
          <h2 className="services-offer">What We Offer</h2>
          <div className="card-grid">
            {services.map((service, index) => (
              <div className="card" key={index}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img"
                />
                <h2 className="card-title">{service.title}</h2>
                <p className="card-desc">{service.description}</p>
                <Link to={service.path} className="card-btn">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <section className="why-choose">
            <h2>Why Choose Surface Dept.?</h2>
            <ul>
              <li>
                <strong>Toronto-Based & Reliable</strong> – We show up on time,
                communicate clearly, and stand by our work.
              </li>
              <li>
                <strong>No Hidden Costs</strong> – Our quotes break everything
                down, so you know what you’re paying for.
              </li>
              <li>
                <strong>Professional Prep & Finish</strong> – We don’t just
                paint — we protect, prep, and prime.
              </li>
              <li>
                <strong>Residential & Commercial Experience</strong> – We know
                how to work in both fast-paced commercial spaces and lived-in
                homes.
              </li>
            </ul>
          </section>
          <section className="quote-cta">
            <h2>Request a Quote</h2>
            <div>
              If you’re ready to get started — or just want to see if we’re a
              good fit — <Link to="/quote">reach out for a free estimate</Link>.
            </div>
            <div>
              Let us know your goals, and we’ll walk you through the best
              options for your space.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
