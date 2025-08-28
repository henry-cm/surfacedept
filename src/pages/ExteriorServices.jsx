import React from "react";
import { useState } from "react";
import "../styles/ExteriorServices.css";

const faqs = [
  {
    question: "What’s the best time of year to paint outside?",
    answer:
      "Late spring through early fall in Toronto is ideal. We avoid painting below 10°C or during high humidity or rain windows.",
  },
  {
    question: "Do you paint brick or stucco?",
    answer:
      "We do — but only after assessing the condition. Brick and stucco require breathable paint and special prep. We'll let you know what's realistic during quoting.",
  },
  {
    question: "Will rain affect the schedule?",
    answer:
      "Yes. Outdoor work is weather-dependent. We monitor forecasts closely and reschedule promptly if rain is expected.",
  },
  {
    question: "Do you power wash before painting?",
    answer:
      "If the surface has mildew, dirt, or chalking — yes. Otherwise, a dry scrub or light rinse may be enough. We assess this during the quoting stage.",
  },
  {
    question: "How long does exterior paint last?",
    answer:
      "Typically 5–10 years depending on surface type, exposure, and paint quality. Trim and accents usually show wear sooner than siding.",
  },
  {
    question: "Do I need to be home while you paint?",
    answer:
      "No — as long as we have safe and clear access, you're not required to be present. We'll coordinate everything with you beforehand.",
  },
  {
    question: "Can you match the existing paint color?",
    answer:
      "Yes. We can use leftover labeled paint, match a paint chip, or scan the surface for a near-exact match.",
  },
  {
    question: "How do you protect windows, decks, and plants?",
    answer:
      "We use drop cloths, plastic sheeting, and painter’s tape to fully mask windows, landscaping, and surfaces not being painted.",
  },
  {
    question: "What if my siding is peeling or cracking?",
    answer:
      "We’ll scrape, sand, and spot-prime affected areas. Full stripping is rare but can be discussed if necessary.",
  },
  {
    question: "Can you do just touch-ups?",
    answer:
      "Yes, small jobs are welcome — though we’ll be upfront about whether a touch-up will blend well or be noticeable.",
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
function ExteriorServices() {
  return (
    <div className="services-wrapper">
      <div className="service-overlay1"></div>
      <div className="service-container">
        <h1>EXTERIOR SERVICES</h1>
        <section className="interior-services">
          <p>
            At <strong>Surface Dept.</strong>, we bring lasting quality and
            attention to detail to every exterior painting project. From front
            porches and fences to full facades, our work is designed to enhance
            curb appeal while protecting your home against the elements. With
            careful preparation, durable finishes, and a commitment to clean,
            professional results, we make sure your property looks its best for
            years to come.
          </p>
          <br />
          <h2>Who This Is For</h2>
          <p>Our exterior painting services are ideal for:</p>
          <p>
            Homeowners, landlords, property managers, and realtors who want to
            enhance curb appeal, protect their investment, or give their
            property a fresh, lasting finish.
          </p>
          <div className="section-flex">
            <div className="text-column">
              <h2>What We Paint</h2>
              <ul>
                <li>Front porches, railings, decks, and fences</li>
                <li>Exterior siding (wood, vinyl, or aluminum)</li>
                <li>Window and door trim, shutters, and fascia</li>
                <li>Garage doors and outbuildings (sheds)</li>
                <li>
                  Concrete foundations and masonry (paintable surfaces only)
                </li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="/images/ext/exterior1.jpg"
                alt="Freshly painted interior"
              />
            </div>
          </div>
          <div className="section-flex reverse">
            <div className="text-column">
              <h2>What’s Included</h2>
              <ul>
                <li>
                  <strong>Detailed Quote First:</strong> We walk you through the
                  job before a brush hits the wall. Quotes are clear,
                  line-by-line, with no surprises.
                </li>
                <li>
                  <strong>Prep Work:</strong> Includes light scraping, sanding,
                  caulking, mildew treatment, and priming as needed.
                </li>
                <li>
                  <strong>Two Coats Standard:</strong> For full coverage and
                  durability.
                </li>
                <li>
                  <strong>Brush and Roller Application:</strong> Applied by hand
                  unless otherwise requested.
                </li>
                <li>
                  <strong>Weather Monitoring:</strong> We schedule around rain,
                  humidity, and temperature for optimal adhesion.
                </li>
                <li>
                  <strong>Clean Edges and Protection:</strong> We protect
                  surrounding areas and clean up fully after each day.
                </li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="/images/ext/exterior23.jpg"
                alt="Paint prep and clean workspace"
              />
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

export default ExteriorServices;
