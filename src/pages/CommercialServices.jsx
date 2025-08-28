import React from "react";
import { useState } from "react";
// import "../styles/CommercialServices.css";

const faqs = [
  {
    question: "Do we need to close our business while you paint?",
    answer:
      "Not usually. We offer flexible scheduling, including evenings and weekends, to minimize disruption. Work can also be phased so key areas remain accessible.",
  },
  {
    question: "How much does commercial painting cost?",
    answer:
      "Pricing depends on the size of the space, surface conditions, and any special requirements. For reference, a small office refresh typically starts around $2–$3 per sq. ft. Quotes are always free and tailored to your project.",
  },
  {
    question: "Do we need to supply the paint?",
    answer:
      "No. We provide quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. If your building or brand requires a specific product line, we can source and apply that as well.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most small offices, studios, or retail units can be completed in 1–3 days. Larger or multi-unit spaces may take longer depending on prep and scheduling needs.",
  },
  {
    question: "What’s included in prep work?",
    answer:
      "We handle light patching, sanding, caulking, and spot priming as needed. Surfaces are properly prepared for clean, durable finishes.",
  },
  {
    question: "Can you match our brand or existing colors?",
    answer:
      "Yes. We can match brand standards, existing paint, or provide samples for approval to ensure consistent results across your space.",
  },
  {
    question: "How do you protect furniture and equipment?",
    answer:
      "We cover or mask all surfaces not being painted, including floors, fixtures, and equipment. If needed, larger items can be shifted within the space and carefully protected.",
  },
  {
    question: "What types of finishes do you offer?",
    answer:
      "We work with low-VOC and low-odor paints in matte, eggshell, satin, semi-gloss, and specialty coatings, depending on the needs of your workspace.",
  },
  {
    question: "How do you keep the site clean?",
    answer:
      "We maintain tidy work areas with protective coverings and perform daily cleanups. A final detailed cleanup is done at project completion.",
  },
  {
    question: "Can you handle quick turnarounds between tenants?",
    answer:
      "Yes. We regularly handle rental unit repaints and can accommodate short timelines to get spaces move-in ready quickly.",
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
function CommercialServices() {
  return (
    <div className="services-wrapper">
      <div className="service-overlay1"></div>
      <div className="service-container">
        <h1>COMMERICAL SERVICES</h1>
        <section className="interior-services">
          <p>
            At <strong>Surface Dept.</strong>, we specialize in professional
            commercial painting with a focus on efficiency, precision, and
            lasting results. Whether it’s an office, retail space, or rental
            unit, we deliver clean finishes that elevate your environment and
            support your business image. Our process is organized,
            detail-driven, and designed to minimize disruption while providing a
            polished result you can rely on.
          </p>
          <br />
          <h2>Who This Is For</h2>
          <p>Our commercial painting services are ideal for:</p>
          <p>
            Business owners, property managers, landlords, and real estate
            professionals who want to refresh offices, retail spaces, rental
            units, or common areas with a clean, professional finish that
            supports their brand and enhances the space.
          </p>
          <div className="section-flex">
            <div className="text-column">
              <h2>What We Paint</h2>
              <ul>
                <li>Offices, meeting rooms, and reception areas</li>
                <li>Retail spaces, storefronts, and studios</li>
                <li>Hallways, lobbies, and common areas</li>
                <li>Walls, ceilings, doors, and trim</li>
                <li>Rental units and turnover spaces</li>
              </ul>
            </div>

            <div className="image-column">
              <img
                src="/src/assets/images/com/commercial1.jpg"
                alt="Freshly painted interior"
              />
            </div>
          </div>
          <div className="section-flex reverse">
            <div className="text-column">
              <h2>What’s Included</h2>
              <ul>
                <li>
                  <strong>Upfront, Detailed Quote:</strong> Clear, line-by-line
                  pricing with scope, surfaces, and timelines outlined before
                  work begins.
                </li>
                <li>
                  <strong>Professional Prep Work:</strong> Surface protection,
                  light patching, sanding, caulking, and priming as needed for a
                  smooth finish.
                </li>
                <li>
                  <strong>Two Coats Standard:</strong> Applied for even
                  coverage, durability, and a polished, professional appearance.
                </li>
                <li>
                  <strong>Low-Disruption Application:</strong> Brush and roller
                  finishes with low-odor products, plus flexible scheduling to
                  reduce downtime.
                </li>
                <li>
                  <strong>Respect for Your Workspace:</strong> Careful masking
                  of fixtures, equipment, and floors, with tidy daily wrap-ups
                  and a full cleanup at completion.
                </li>
              </ul>
            </div>

            <div className="image-column">
              <img
                src="/src/assets/images/com/commercial4.jpg"
                alt="Paint prep and clean workspace"
              />
            </div>
          </div>
          <h2>How We Work</h2>
          <ul>
            <li>
              Quote & Walkthrough <br />
              We assess your space, discuss timelines, and provide a clear,
              written quote—no vague estimates or hidden costs.
            </li>
            <li>
              Prep & Setup <br />
              You’ll get a simple prep checklist if needed. We handle the rest:
              protecting equipment, masking surfaces, and priming where
              required.
            </li>
            <li>
              Painting in Progress <br />
              Work is scheduled around your operations. We stay on timeline,
              keep noise and disruption to a minimum, and maintain a clean
              workspace.
            </li>
            <li>
              Final Walkthrough & Wrap-Up <br />A joint inspection to ensure
              satisfaction, followed by thorough cleanup. Your space is ready
              for staff, tenants, or customers right away.
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

export default CommercialServices;
