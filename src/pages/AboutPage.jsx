import React from "react";
import ProfessionalismIcon from "../assets/icons/professionalism.svg";
import TransparencyIcon from "../assets/icons/transparency.svg";
import CraftsmanshipIcon from "../assets/icons/craftsmanship.svg";
import RespectIcon from "../assets/icons/respect.svg";
import ClarityIcon from "../assets/icons/clarity.svg";
import SatisfactionIcon from "../assets/icons/satisfaction.svg";
import VersatilityIcon from "../assets/icons/versatility.svg";
import CommunicationIcon from "../assets/icons/communication.svg";
import ValueIcon from "../assets/icons/value.svg";

import "../styles/AboutPage.css";

const values = [
  {
    icon: ProfessionalismIcon,
    title: "Professionalism",
    desc: "We show up on time, respect your space, and complete our work with integrity.",
  },
  {
    icon: TransparencyIcon,
    title: "Transparency",
    desc: "No hidden fees, no games. We tell you what it costs and why.",
  },
  {
    icon: CraftsmanshipIcon,
    title: "Craftsmanship",
    desc: "Our painting is neat, durable, and thoughtfully executed.",
  },
  {
    icon: RespectIcon,
    title: "Respect",
    desc: "We protect your property and leave it better than we found it.",
  },

  {
    icon: SatisfactionIcon,
    title: "Satisfaction",
    desc: "We work until you’re happy. End of story.",
  },
  {
    icon: VersatilityIcon,
    title: "Versatility",
    desc: "From accent walls to full interiors, we adapt to your project needs.",
  },
  {
    icon: CommunicationIcon,
    title: "Communication",
    desc: "We update you at every step and never leave you guessing.",
  },
  {
    icon: ValueIcon,
    title: "Value",
    desc: "Premium finish, honest price. No fluff.",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-overlay"></div>
      <div className="about-container">
        <h1>WHO WE ARE</h1>

        <section>
          <h2>Company Introduction</h2>
          <p>
            Surface Dept. Painting is a Toronto-based interior and exterior
            painting company focused on delivering high-quality results with a
            modern sensibility. We specialize in residential and light
            commercial spaces, offering tailored painting services that elevate
            the look and feel of every room we touch.
          </p>
          <br></br>
          <p>
            Our company is founded on the belief that painting is more than just
            a finishing touch. It is an opportunity to transform a space, shape
            first impressions, and create lasting comfort. From the initial
            consultation to the final walk-through, we ensure every step of the
            process is clearly communicated and smoothly executed.
          </p>
        </section>
        <div className="about-content">
          <section>
            <h2>Mission and Philosophy</h2>
            <p>
              At Surface Dept. Painting, we believe in craftsmanship. Painting
              is not simply about applying color to a wall. It is about
              understanding form, light, and texture. Our mission is to combine
              efficiency with attention to detail, ensuring that every
              brushstroke serves a purpose.
            </p>
            <br></br>
            <p>
              We treat each project as a collaboration. Whether our clients know
              exactly what they want or are seeking creative guidance, we take
              the time to listen, advise, and adapt. Our goal is to leave
              clients with a space that reflects their identity and exceeds
              their expectations.
            </p>
          </section>

          <section>
            <h2>Who We Serve</h2>
            <p>
              Our services are designed for homeowners, condo owners, real
              estate agents, and small businesses seeking professional,
              reliable, and visually compelling paintwork. Whether you’re
              transforming a single room or refreshing an entire property, we
              deliver work that adds value and character.
            </p>
          </section>
        </div>
        <section>
          <h2>Our Process</h2>
          <ul>
            <li>
              <strong>Initial Consultation:</strong> We review your vision,
              goals, and timelines.
            </li>
            <li>
              <strong>Detailed Quoting:</strong> You receive a transparent
              breakdown of materials, labor, and costs.
            </li>
            <li>
              <strong>Prep Work and Protection:</strong> Surfaces are cleaned
              and primed; furniture and floors are covered.
            </li>
            <li>
              <strong>Execution:</strong> Our team paints efficiently and
              cleanly, ensuring consistency and coverage.
            </li>
            <li>
              <strong>Final Review:</strong> We inspect the work with you and
              address any touch-ups immediately.
            </li>
          </ul>
        </section>
        <div className="about-content">
          <section>
            <h2>Our Standards and Materials</h2>
            <p>
              We work with trusted brands such as Benjamin Moore,
              Sherwin-Williams, and Dulux. Low-VOC and premium-grade paints are
              available. Every project is completed with an emphasis on clean
              lines, uniform application, and lasting durability.
            </p>
          </section>

          <section>
            <h2>The Story Behind Surface Dept.</h2>
            <p>
              Founded by a multidisciplinary artist and designer, Surface Dept.
              Painting brings an elevated aesthetic to professional paintwork.
              With experience in sculpture, fine art, and spatial design, our
              founder approaches every project as both a technician and an
              artist. Each job is more than just a task, it is a commissioned
              transformation.
            </p>
          </section>
        </div>
        <section className="values">
          <h2>Core Values</h2>
          <div className="about-values">
            {values.map((val, index) => (
              <div className="value-card" key={index}>
                <img src={val.icon} alt={`${val.title} icon`} />
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>Let’s Work Together</h2>
          <p>
            Whether you're preparing a home for sale, launching a new business,
            or just ready for a change, we’d love to be part of it. Visit our
            Contact or Quote page to get started. We respond quickly and make
            the process easy from start to finish.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
