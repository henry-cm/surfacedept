import React, { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Quote.css";

function Quote() {
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    if (fd.get("company")) {
      setStatus("success");
      form.reset();
      setFiles([]);
      return;
    }

    const params = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      okToText: fd.get("okToText") === "on" ? "Yes" : "No",

      propertyType: fd.get("propertyType") || "",
      serviceType: fd.get("serviceType") || "",
      address: fd.get("address") || "",
      neighbourhood: fd.get("neighbourhood") || "",
      areas: fd.get("areas") || "",
      surfaces: fd.get("surfaces") || "",
      condition: fd.get("condition") || "",
      idealStart: fd.get("idealStart") || "",
      flexWindow: fd.get("flexWindow") || "",
      occupancy: fd.get("occupancy") || "",
      offHours: fd.get("offHours") || "",
      budget: fd.get("budget") || "Not sure",
      access: fd.get("access") || "",
      details: fd.get("details") || "",

      to_email: "info@surfacedept.com", // must match {{to_email}} in your template
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      photoCount: files?.length ? `${files.length}` : "0",
    };

    try {
      const svc = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const tpl = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE;
      const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!svc || !tpl || !pub) throw new Error("Missing EmailJS env vars");

      await emailjs.send(svc, tpl, params, { publicKey: pub });

      setStatus("success");
      form.reset();
      setFiles([]);
    } catch (err) {
      console.error("EmailJS error (quote):", err);
      setStatus("error");
    }
  };

  const handleFiles = (e) => {
    const list = Array.from(e.target.files || []);
    setFiles(list.slice(0, 8)); // cap at 8 images (not sent yet)
  };

  const fileSummary = useMemo(() => {
    if (!files?.length) return "No files selected";
    return `${files.length} file${files.length > 1 ? "s" : ""} selected`;
  }, [files]);

  return (
    <section className="services-wrapper quote-wrapper">
      <div className="service-overlay1" aria-hidden="true" />
      <div className="service-container">
        <h1>GET A QUOTE</h1>

        <div className="quote-section">
          <div className="text-block interior-services">
            <h2>How to Get a Quote</h2>
            <p>
              Share a few project details and photos (if available). We’ll
              review and follow up within <strong>1 business day</strong> with
              next steps and a clear estimate.
            </p>
            <ul>
              <li>
                <strong>Ideal for:</strong> interior or exterior, residential or
                commercial
              </li>
              <li>
                <strong>Fastest pricing:</strong> include areas, condition,
                timing, and access notes
              </li>
              <li>
                <strong>Photos:</strong> up to 8 images (rooms, close-ups,
                exterior elevations)
              </li>
            </ul>
          </div>
        </div>

        <div className="quote-section">
          <form className="quote-form" onSubmit={handleSubmit} noValidate>
            {status === "success" && (
              <div className="notice success" role="status">
                Thanks! Your request was sent. We’ll reply within 1 business
                day.
              </div>
            )}
            {status === "error" && (
              <div className="notice error" role="alert">
                Sorry—something went wrong. Please try again or email us
                directly.
              </div>
            )}

            {/* Honeypot */}
            <input
              type="text"
              name="company"
              className="hp-field"
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Contact */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="input"
                  placeholder="(416) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="okToText" className="sr-only">
                  Okay to text me
                </label>
                <div className="form-group checkbox">
                  <input id="okToText" name="okToText" type="checkbox" />
                  <label htmlFor="okToText">
                    Okay to text me about my quote
                  </label>
                </div>
              </div>
            </div>

            {/* Project Type */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="propertyType">Property Type</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  className="select"
                  defaultValue="Residential"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="select"
                  defaultValue="Interior"
                >
                  <option>Interior</option>
                  <option>Exterior</option>
                  <option>Both</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="input"
                  placeholder="Street, City, Postal Code"
                />
              </div>
              <div className="form-group">
                <label htmlFor="neighbourhood">Neighbourhood (optional)</label>
                <input
                  id="neighbourhood"
                  name="neighbourhood"
                  type="text"
                  className="input"
                />
              </div>
            </div>

            {/* Scope */}
            <div className="form-group">
              <label htmlFor="areas">Areas / Rooms</label>
              <input
                id="areas"
                name="areas"
                type="text"
                className="input"
                placeholder="e.g., Living room, 2 bedrooms, hallway; or exterior siding + trim"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="surfaces">Surfaces</label>
                <select
                  id="surfaces"
                  name="surfaces"
                  className="select"
                  defaultValue="Walls, Trim & Ceilings"
                >
                  <option>Walls</option>
                  <option>Trim</option>
                  <option>Ceilings</option>
                  <option>Walls & Trim</option>
                  <option>Walls, Trim & Ceilings</option>
                  <option>Exterior siding & trim</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="condition">Current Condition</label>
                <select
                  id="condition"
                  name="condition"
                  className="select"
                  defaultValue="Light patching"
                >
                  <option>Like new</option>
                  <option>Light patching</option>
                  <option>Moderate repairs</option>
                  <option>Heavy repairs</option>
                </select>
              </div>
            </div>

            {/* Timing */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="idealStart">Ideal Start Date</label>
                <input
                  id="idealStart"
                  name="idealStart"
                  type="date"
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="flexWindow">Flexibility Window</label>
                <select
                  id="flexWindow"
                  name="flexWindow"
                  className="select"
                  defaultValue="Flexible (±2 weeks)"
                >
                  <option>Specific date only</option>
                  <option>Flexible (±1 week)</option>
                  <option>Flexible (±2 weeks)</option>
                  <option>Anytime this month</option>
                </select>
              </div>
            </div>

            {/* Occupancy & Off-hours */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="occupancy">Occupancy</label>
                <select
                  id="occupancy"
                  name="occupancy"
                  className="select"
                  defaultValue="Occupied"
                >
                  <option>Occupied</option>
                  <option>Vacant</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="offHours">Off-Hours Needed?</label>
                <select
                  id="offHours"
                  name="offHours"
                  className="select"
                  defaultValue="No"
                >
                  <option>No</option>
                  <option>Evenings</option>
                  <option>Weekends</option>
                  <option>Evenings & Weekends</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="form-group">
              <label htmlFor="budget">Budget Range (optional)</label>
              <select
                id="budget"
                name="budget"
                className="select"
                defaultValue="Not sure"
              >
                <option>Not sure</option>
                <option>$500–$1,000</option>
                <option>$1,000–$2,500</option>
                <option>$2,500–$5,000</option>
                <option>$5,000–$10,000</option>
                <option>$10,000+</option>
              </select>
            </div>

            {/* Photos (kept for UI only; not sent yet) */}
            {/* <div className="form-group">
              <label htmlFor="photos">Photos (up to 8)</label>
              <input
                id="photos"
                name="photos"
                type="file"
                accept="image/*"
                className="upload"
                multiple
                onChange={handleFiles}
              />
              <p className="upload-hint">{fileSummary}</p>
            </div> */}

            {/* Access + Notes */}
            <div className="form-group">
              <label htmlFor="access">Access Notes</label>
              <input
                id="access"
                name="access"
                type="text"
                className="input"
                placeholder="Parking/loading info, elevator, entry instructions"
              />
            </div>

            <div className="form-group">
              <label htmlFor="details">Additional Details</label>
              <textarea
                id="details"
                name="details"
                className="textarea"
                rows="6"
                placeholder="Anything else we should know?"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="button">
                Request Quote
              </button>
              <p className="form-sla">We reply within 1 business day.</p>
            </div>
          </form>
        </div>

        {/* FAQs (unchanged) */}
        <div className="quote-section faqs">
          <div className="faq-accordion">
            <div className="accordion-item" tabIndex="0">
              <div className="accordion-question">
                Can you quote from photos only?{" "}
                <span className="accordion-toggle">+</span>
              </div>
              <div className="accordion-answer">
                Often, yes. For straightforward jobs, photos and a short
                description are enough. For complex projects we may recommend a
                quick site visit.
              </div>
            </div>
            <div className="accordion-item" tabIndex="0">
              <div className="accordion-question">
                How accurate is the initial estimate?{" "}
                <span className="accordion-toggle">+</span>
              </div>
              <div className="accordion-answer">
                We provide a clear range based on the information you share.
                After confirming scope and access, we finalize a fixed quote
                before work begins.
              </div>
            </div>
            <div className="accordion-item" tabIndex="0">
              <div className="accordion-question">
                Do you offer evenings or weekends?{" "}
                <span className="accordion-toggle">+</span>
              </div>
              <div className="accordion-answer">
                Yes. Off-hours options are available to reduce disruption.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
