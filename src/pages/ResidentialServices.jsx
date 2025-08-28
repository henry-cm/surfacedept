import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ResidentialServices.css";

// ✅ Import images from src so Vite bundles them
import res1 from "../assets/images/res/residential1.jpg";
import res2 from "../assets/images/res/residential.jpg";

const faqs = [
  {
    question: "Do I need to supply the paint?",
    answer:
      "No. We can provide quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. If you already have a preferred color or product, we’ll work with that too.",
  },
  {
    question: "How much does interior painting cost?",
    answer:
      "Pricing depends on the size of the space and prep required. For reference, repainting a standard 700 sq. ft. condo typically starts around $1,000–$1,500. Quotes are always free.",
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
    question: "What finishes can I choose?",
    answer:
      "Flat, matte, eggshell, satin, semi-gloss, and high-gloss — we’ll recommend what fits the room and traffic level.",
  },
  {
    question: "How do you keep the space clean?",
    answer:
      "We use drop cloths, masking, and protective coverings. At day’s end we tidy so your home stays livable.",
  },
  {
    question: "Can you handle small touch-ups?",
    answer:
      "Yes. Whether it’s a single wall or a few repairs, we’re happy to help — and we’ll be upfront about how well touch-ups will blend.",
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-item ${open ? "open" : ""}`}>
      <button
        className="accordion-question"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className="accordion-toggle">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

export default function ResidentialServices() {
  return (
    <div className="services-wrapper">
      <div className="service-overlay1" />
      <div className="service-container">
        <h1>RESIDENTIAL SERVICES</h1>

        <section className="interior-services">
          <p>
            At <strong>Surface Dept.</strong> we focus on clean, high-quality
            residential painting with careful prep, sharp lines, and durable
            finishes. Whether it’s one room or your whole home, we work
            efficiently, respect your space, and deliver a refined result.
          </p>

          <h2>Who This Is For</h2>
          <p>
            Homeowners, condo owners, landlords, and tenants looking to refresh
            interiors, brighten living areas, or add a personal touch.
          </p>

          <div className="section-flex">
            <div className="text-column">
              <h2>What We Paint</h2>
              <ul>
                <li>Living rooms, bedrooms, basements</li>
                <li>Kitchens, bathrooms, hallways</li>
                <li>Ceilings, walls, accent features</li>
                <li>Doors, trim, baseboards, mouldings</li>
                <li>Closets, staircases, entryways</li>
              </ul>
            </div>

            <div className="image-column">
              {/* ✅ Imported image URL works in production */}
              <img src={res2} alt="Freshly painted living room" />
            </div>
          </div>

          <div className="section-flex reverse">
            <div className="text-column">
              <h2>What’s Included</h2>
              <ul>
                <li>
                  <strong>Detailed Quote:</strong> Clear, line-by-line pricing
                  before we begin.
                </li>
                <li>
                  <strong>Thorough Prep:</strong> Coverings, light patching,
                  sanding, priming as needed.
                </li>
                <li>
                  <strong>Two Coats Standard:</strong> Consistent color and
                  coverage.
                </li>
                <li>
                  <strong>Clean Edges:</strong> Brush & roller for a
                  professional finish.
                </li>
                <li>
                  <strong>Respect for Your Home:</strong> Careful masking and
                  daily cleanup.
                </li>
              </ul>
            </div>

            <div className="image-column">
              <img src={res1} alt="Detail work on trim and walls" />
            </div>
          </div>

          <h2>How We Work</h2>
          <ul>
            <li>
              <strong>Quote & Walkthrough:</strong> We assess your space and
              provide a clear written quote.
            </li>
            <li>
              <strong>Prep & Setup:</strong> You get a short prep checklist; we
              handle protection, patching, and priming.
            </li>
            <li>
              <strong>Painting:</strong> We stick to schedule, work cleanly, and
              keep you informed.
            </li>
            <li>
              <strong>Final Walkthrough:</strong> Inspection together, then
              cleanup. Ready to enjoy immediately.
            </li>
          </ul>

          <h2>FAQs</h2>
          <div className="faqs">
            {faqs.map((f, i) => (
              <AccordionItem key={i} question={f.question} answer={f.answer} />
            ))}
          </div>

          <h2>Get Started</h2>
          <p>
            We book one job at a time so you get full focus. Ready to paint or
            want options?{" "}
            <Link to="/quote" className="inline-link">
              Request a quote
            </Link>{" "}
            and we’ll reply within 1 business day.
          </p>
        </section>
      </div>
    </div>
  );
}
