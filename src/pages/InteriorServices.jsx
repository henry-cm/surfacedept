import React from "react";
import { useState } from "react";
import "../styles/InteriorServices.css";

const faqs = [
  {
    question: "Do I need to supply the paint?",
    answer:
      "No. We can supply paint from trusted brands like Benjamin Moore or Sherwin-Williams. If you have a specific product or color in mind, we’ll work with that too.",
  },
  {
    question: "How much does interior painting cost?",
    answer:
      "Pricing depends on the size of the space and the prep required. For reference, repainting a standard 700 sq. ft. condo typically starts around $1,000–$1,500. Quotes are always free.",
  },
  {
    question: "Do I need to be home during the job?",
    answer:
      "No, as long as we have access and clear instructions, you're not required to be there. That said, you're welcome to stay if you prefer.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "Most 1–2 bedroom condos take 1.5 to 3 days. Larger homes or multi-room jobs may take longer depending on prep work and number of coats.",
  },
  {
    question: "Do you move furniture?",
    answer:
      "We ask that small and fragile items be removed ahead of time. For larger furniture, we can work around it or carefully move and cover it as needed.",
  },
  {
    question: "Do you paint ceilings and trim?",
    answer:
      "Yes. Standard interior jobs include walls by default. Ceilings, trim, doors, and baseboards can be added on request and included in your quote.",
  },
  {
    question: "What prep do I need to do before you arrive?",
    answer:
      "We’ll send a short checklist before the job. Usually, this means removing small items, wall hangings, and clearing access to the areas being painted.",
  },
  {
    question: "What if there are holes or damage on the walls?",
    answer:
      "Light repairs like nail holes, scuffs, and dents are included. Larger damage can be repaired for an added cost and will be quoted ahead of time.",
  },
  {
    question: "What kind of paint do you use?",
    answer:
      "Unless requested otherwise, we use high-quality, low-VOC latex paints suited for interior residential work. We’ll recommend finishes based on the room type (e.g. matte for bedrooms, satin for kitchens).",
  },
  {
    question: "Do you offer color consultations?",
    answer:
      "We don’t offer formal design services, but we’re happy to provide input, samples, or test swatches to help you decide. You’ll always have final say.",
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
function InteriorServices() {
  return (
    <div className="services-wrapper">
      <div className="service-overlay1"></div>
      <div className="service-container">
        <h1>INTERIOR SERVICES</h1>
        <section className="interior-services">
          <p>
            At <strong>Surface Dept.</strong>, we specialize in interior
            painting done with precision and care. From a single room to a
            complete home refresh, we provide clean, reliable work that respects
            your time, your space, and your standards. Based in Toronto, we’re
            dedicated to delivering consistent, professional results with a
            focus on quality craftsmanship and attention to detail.
          </p>

          <h2>Who This Is For</h2>
          <p>Our interior services are best suited for:</p>
          <p>
            Homeowners, condo owners, landlords, tenants, property managers,
            realtors and stagers or anyone looking for one-off or small interior
            paint jobs
          </p>

          <div className="section-flex">
            <div className="text-column">
              <h2>What We Paint</h2>
              <ul>
                <li>Walls and ceilings</li>
                <li>Bedrooms, living rooms, hallways, kitchens</li>
                <li>Staircases</li>
                <li>Trim, baseboards, doors, and frames</li>
                <li>Closets and small utility rooms</li>
                <li>Crown molding</li>
                <li>
                  Kitchen cabinets (limited offering — airbrush available on
                  request)
                </li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="/images/int/interior2.jpg"
                alt="Freshly painted interior"
              />
            </div>
          </div>

          <div className="section-flex reverse">
            <div className="text-column">
              <h2>What’s Included</h2>
              <ul>
                <li>
                  <strong>Detailed Quote First:</strong> Clear, written
                  estimates. No vague numbers.
                </li>
                <li>
                  <strong>Prep Work:</strong> Light patching, sanding, caulking,
                  and spot priming.
                </li>
                <li>
                  <strong>Two Coats Minimum:</strong> Always included—no
                  shortcuts.
                </li>
                <li>
                  <strong>Brush and Roller Finish:</strong> Hand-applied
                  finishes with clean results.
                </li>
                <li>
                  <strong>Cabinet Spraying (By Request):</strong> Offered
                  depending on scope.
                </li>
                <li>
                  <strong>Site Protection:</strong> We cover floors, furniture,
                  and fixtures.
                </li>
                <li>
                  <strong>Daily Tidy-Up:</strong> We clean up each night and
                  after completion.
                </li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="/images/int/interior3.jpg"
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

export default InteriorServices;
