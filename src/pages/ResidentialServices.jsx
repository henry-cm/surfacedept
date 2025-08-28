import React from "react";
import { useState } from "react";
import "../styles/ResidentialServices.css";

import res1 from "../assets/images/res/res.jpg";
import res2 from "../assets/images/res/res2go.jpg";

const faqs = [
  {
    question: "Do I need to supply the paint?",
    answer:
      "No. We can provide quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. If you already have a preferred color or product, we’ll work with that too.",
  },
  {
    question: "How much does interior painting cost?",
    answer:
      "Pricing depends on the size of the space and prep required. For example, repainting a standard 700 sq. ft. condo typically starts around $1,000–$1,500. Quotes are always free.",
  },
  {
    question: "Do I need to be home while you paint?",
    answer:
      "Not necessarily. As long as we have access and clear instructions, you don’t need to be present. Many clients choose to be out while work is in progress.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most condos and small homes take 1–3 days depending on the number of rooms and prep work. Larger homes may take longer.",
  },
  {
    question: "What’s included in prep work?",
    answer:
      "We cover floors and furniture, patch small holes and cracks, sand rough spots, and prime surfaces as needed before applying paint.",
  },
  {
    question: "Can you match existing colors?",
    answer:
      "Yes. We can work with leftover paint, color chips, or scan walls to match your current shade as closely as possible.",
  },
  {
    question: "Do you move furniture?",
    answer:
      "We ask that small and fragile items be moved ahead of time. Larger furniture can be shifted within the room and carefully covered for protection.",
  },
  {
    question: "What kind of finishes can I choose?",
    answer:
      "We work with flat, matte, eggshell, satin, semi-gloss, and high-gloss finishes, depending on the room and your preference.",
  },
  {
    question: "How do you keep the space clean?",
    answer:
      "We use drop cloths, masking, and protective coverings. At the end of each day, we tidy up so your home stays as livable as possible.",
  },
  {
    question: "Can you handle small touch-ups?",
    answer:
      "Yes. Whether it’s a single wall or just a few repairs, we’re happy to help — and we’ll be upfront about whether touch-ups will blend seamlessly.",
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`accordion-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="accordion-question">
        {question}
        <span className="accordion-toggle">{open ? "–" : "+"}</span>
      </div>
      {open && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}
function ResidentialServices() {
  return (
    <div className="services-wrapper">
      <div className="service-overlay1"></div>
      <div className="service-container">
        <h1>RESIDENTIAL SERVICES</h1>
        <section className="interior-services">
          <p>
            At <strong>Surface Dept.</strong>, we specialize in clean,
            high-quality residential painting with an emphasis on preparation,
            precision, and long-lasting results. Whether you're updating a
            single room or repainting your entire home, we bring a thoughtful,
            detail-driven approach to every project. We work efficiently,
            respect your space, and deliver a finish that feels fresh, refined,
            and built to last.
          </p>
          <br />
          <h2>Who This Is For</h2>
          <p>Our residential painting services are perfect for:</p>
          <p>
            Homeowners, condo owners, landlords, and tenants who want to refresh
            interiors, brighten living spaces, or add a personalized touch that
            makes a house feel like home.
          </p>
          <div className="section-flex">
            <div className="text-column">
              <h2>What We Paint</h2>
              <ul>
                <li>Living rooms, bedrooms, and basements</li>
                <li>Kitchens, bathrooms, and hallways</li>
                <li>Ceilings, walls, and accent features</li>
                <li>Doors, trim, baseboards, and crown moulding</li>
                <li>Closets, staircases, and entryways</li>
              </ul>
            </div>

            <div className="image-column">
              <img src={res2} alt="Freshly painted interior" />
            </div>
          </div>
          <div className="section-flex reverse">
            <div className="text-column">
              <h2>What’s Included</h2>
              <ul>
                <li>
                  <strong>Upfront, Detailed Quote:</strong> Clear, line-by-line
                  pricing so you know exactly what to expect before we begin.
                </li>
                <li>
                  <strong>Thorough Prep Work:</strong> Furniture covering, floor
                  protection, light patching, sanding, and priming as needed.
                </li>
                <li>
                  <strong>Two Coats Standard:</strong> Applied for consistent
                  color, smooth coverage, and lasting durability.
                </li>
                <li>
                  <strong>Hand-Applied Finish:</strong> Brush and roller
                  application for clean edges and a professional result.
                </li>
                <li>
                  <strong>Respect for Your Home:</strong> Careful masking of
                  fixtures and trim, with a full cleanup at the end of each day.
                </li>
              </ul>
            </div>

            <div className="image-column">
              <img src={res1} alt="Freshly painted interior" />
            </div>
          </div>
          <h2>How We Work</h2>
          <ul>
            <li>
              Quote & Walkthrough <br />
              We assess the space and your needs. You get a clear, written
              quote—no vague estimates.
            </li>
            <li>
              Prep & Setup <br />
              You’ll receive a short checklist to prep your space. We handle the
              rest: protecting surfaces, patching, and priming.
            </li>
            <li>
              Painting Begins <br />
              We stick to the schedule, work quietly and cleanly, and keep you
              informed throughout. One job at a time—yours.
            </li>
            <li>
              Walkthrough & Wrap-Up Final <br />
              inspection with you, followed by cleanup. The space is ready to
              enjoy immediately.
            </li>
          </ul>
          <h2>FAQs</h2>
          <div className="faqs">
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
          <h2>Get Started</h2>
          <p>
            Booking is straightforward — we only take on one job at a time, so
            you get full focus. If you're ready to paint or just want to talk
            options,
            <a href="/quote"> request a quote</a> and we’ll get back to you
            within 24 hours.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ResidentialServices;
