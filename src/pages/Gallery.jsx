import React, { useState, useEffect, useCallback } from "react";
import "../styles/Gallery.css";

const works = [
  {
    id: "w1",
    title: "Industrial Exterior",
    cover: "/gal/1/a1.jpeg",
    images: [
      "/gal/1/a1.jpeg",
      "/gal/1/a2.jpeg",
      "/gal/1/a3.jpeg",
      "/gal/1/a7.jpeg",
      "/gal/1/a8.jpeg",
      "/gal/1/a5.jpeg",
    ],
  },
  {
    id: "w2",
    title: "Commercial Interior",
    cover: "/gal/2/b1.jpeg",
    images: [
      "/gal/2/b1.jpeg",
      "/gal/2/b7.jpeg",
      "/gal/2/b8.jpeg",
      "/gal/2/b9.jpeg",
      "/gal/2/b2.jpeg",
      "/gal/2/b3.jpeg",
    ],
  },
  {
    id: "w3",
    title: "Accent Wall And Dining Room",
    cover: "/gal/3/c3.jpeg",
    images: [
      "/gal/3/c3.jpeg",
      "/gal/3/c2.jpeg",
      "/gal/3/c8.jpeg",
      "/gal/3/c9.jpeg",
      "/gal/3/c5.jpeg",
      "/gal/3/c6.jpeg",
    ],
  },
  {
    id: "w4",
    title: "Stairwell Refresh",
    cover: "/gal/4/d4.jpeg",
    images: [
      "/gal/4/d4.jpeg",
      "/gal/4/d2.jpeg",
      "/gal/4/d7.jpeg",
      "/gal/4/d1.jpeg",
      "/gal/4/d8.jpeg",
      "/gal/4/d3.jpeg",
    ],
  },
  {
    id: "w5",
    title: "Hallway & Stairway Trim",
    cover: "/gal/5/e1.jpeg",
    images: [
      "/gal/5/e1.jpeg",
      "/gal/5/e2.jpeg",
      "/gal/5/e3.jpeg",
      "/gal/5/e4.jpeg",
      "/gal/5/e5.jpeg",
      "/gal/5/e6.jpeg",
    ],
  },
  {
    id: "w6",
    title: "Closet Doors",
    cover: "/gal/6/f1.jpeg",
    images: ["/gal/6/f1.jpeg", "/gal/6/f2.jpeg"],
  },
  {
    id: "w5",
    title: "Exterior",
    cover: "/gal/7/g1.jpeg",
    images: [
      "/gal/7/g1.jpeg",
      "/gal/7/g3.jpeg",
      "/gal/7/g4.jpeg",
      "/gal/7/g5.jpeg",
      "/gal/7/g6.jpeg",
    ],
  },
  {
    id: "w5",
    title: "Kitchen Drawers and Ceiling",
    cover: "/gal/8/h2.jpeg",
    images: [
      "/gal/8/h2.jpeg",
      "/gal/8/h3.jpeg",
      "/gal/8/h4.jpeg",
      "/gal/8/h5.jpeg",
    ],
  },
];

// Utility hook for ESC and arrow keys in lightbox
function useKeyPress(handlerMap) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape" && handlerMap.onEsc) handlerMap.onEsc();
      if (e.key === "ArrowRight" && handlerMap.onNext) handlerMap.onNext();
      if (e.key === "ArrowLeft" && handlerMap.onPrev) handlerMap.onPrev();
    },
    [handlerMap]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);
}

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (workIdx, imageIdx = 0) => {
    setActiveWorkIndex(workIdx);
    setActiveImageIndex(imageIdx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    const imgs = works[activeWorkIndex].images;
    setActiveImageIndex((i) => (i + 1) % imgs.length);
  };

  const prevImage = () => {
    const imgs = works[activeWorkIndex].images;
    setActiveImageIndex((i) => (i - 1 + imgs.length) % imgs.length);
  };

  useKeyPress({ onEsc: closeLightbox, onNext: nextImage, onPrev: prevImage });

  return (
    <div className="gallery-page-wrapper">
      <div className="gallery-overlay" />
      <div className="gallery-container">
        {/* Keep title identical in size/placement to your About page */}
        <h1>GALLERY</h1>

        {/* Full-bleed, responsive grid */}
        <section className="gallery-grid" aria-label="Gallery grid">
          {works.map((work, wIdx) => (
            <article className="work-card" key={work.id}>
              <button
                className="cover-btn"
                onClick={() => openLightbox(wIdx, 0)}
                aria-label={`Open ${work.title}`}
              >
                <img
                  src={work.cover}
                  alt={work.title}
                  loading="lazy"
                  className="cover-img"
                />
              </button>

              <div className="work-meta">
                <h3>{work.title}</h3>
                {/* Thumbnails for the 3 images */}
                <div className="thumbs">
                  {work.images.map((src, i) => (
                    <button
                      key={src}
                      className="thumb-btn"
                      onClick={() => openLightbox(wIdx, i)}
                      aria-label={`View image ${i + 1} from ${work.title}`}
                    >
                      <img
                        src={src}
                        alt={`${work.title} – ${i + 1}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeLightbox}
        >
          <div className="lightbox" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              aria-label="Close"
              onClick={closeLightbox}
            >
              ×
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              aria-label="Previous image"
              onClick={prevImage}
            >
              ‹
            </button>

            <img
              className="lightbox-image"
              src={works[activeWorkIndex].images[activeImageIndex]}
              alt={`${works[activeWorkIndex].title} – ${activeImageIndex + 1}`}
            />

            <button
              className="lightbox-nav lightbox-next"
              aria-label="Next image"
              onClick={nextImage}
            >
              ›
            </button>

            <div className="lightbox-caption">
              {works[activeWorkIndex].title} — {activeImageIndex + 1} /{" "}
              {works[activeWorkIndex].images.length}
            </div>
          </div>
        </div>
      )}
      <section className="quote-info">
        <h2>Ready for a quote?</h2>
        <p>
          Every space is different. Tell us a bit about your project and we’ll
          give you a fast, no-pressure estimate.
        </p>
        <ul>
          <li>
            <strong>What you’ll get:</strong> clear scope, prep plan, product
            recommendations, timeline, and a written quote.
          </li>
          <li>
            <strong>What to do:</strong> simply go to the quote section and fill
            in the form.
          </li>
        </ul>
        <p>
          Prefer to talk it through first? Send a message and we’ll help you
          scope it.
        </p>
      </section>
    </div>
  );
};

export default Gallery;
