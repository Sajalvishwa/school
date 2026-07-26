import { useState } from "react";
import "./Gallery.css";

// ================= Images =================

import img1 from "../assets/images/child/1.jpg.webp";
import img2 from "../assets/images/child/3.jpg.webp";
import img3 from "../assets/images/child/4.jpg.webp";
import img4 from "../assets/images/child/6.jpg.webp";
import img5 from "../assets/images/child/7.jpg.webp";
import img6 from "../assets/images/child/8.jpg.webp";
import img7 from "../assets/images/child/9.jpg.webp";
import img8 from "../assets/images/child/11.jpg.webp";
import img9 from "../assets/images/child/12.jpg.webp";
import img10 from "../assets/images/child/13.jpg.webp";
import img11 from "../assets/images/child/15.jpg.webp";
import img12 from "../assets/images/child/17.jpg.webp";
import img13 from "../assets/images/child/19.jpg.webp";
import img14 from "../assets/images/child/20.jpg.webp";
import img15 from "../assets/images/child/21.jpg.webp";
import img16 from "../assets/images/child/23.jpg";
import img17 from "../assets/images/child/24.jpg";
import img18 from "../assets/images/child/25.jpg";
import img19 from "../assets/images/child/26.jpg";
import img20 from "../assets/images/child/27.jpg";
import img21 from "../assets/images/child/28.jpg";
import img22 from "../assets/images/child/29.jpg";
import img23 from "../assets/images/child/gallery2.jpg.jpeg.webp";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  };

  const getClass = (index) => {
    const pattern = [
      "big",
      "small",
      "medium",
      "tall",
      "wide",
      "small",
      "medium",
      "tall",
    ];

    return pattern[index % pattern.length];
  };

    return (
    <div className="gallery-page">

      {/* ================= HERO ================= */}

      <section className="gallery-hero">

        <div className="hero-shape shape1"></div>
        <div className="hero-shape shape2"></div>
        <div className="hero-shape shape3"></div>

        <div className="container">

          <span className="hero-tag">
            📸 Excellence International School
          </span>

          <h1>
            Every Picture
            <br />
            Tells A Story
          </h1>

          <p>
            Explore unforgettable memories, classroom learning, sports,
            celebrations and joyful moments that make Excellence International
            School a wonderful place to learn and grow.
          </p>

          <div className="gallery-stats">

            <div className="stat">
              <h2>23+</h2>
              <span>Gallery Photos</span>
            </div>

            <div className="stat">
              <h2>100+</h2>
              <span>School Events</span>
            </div>

            <div className="stat">
              <h2>1500+</h2>
              <span>Happy Students</span>
            </div>

            <div className="stat">
              <h2>15+</h2>
              <span>Years Excellence</span>
            </div>

          </div>

        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 200">
            <path
              fill="#fffdf5"
              d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,122.7C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160V200H0Z"
            />
          </svg>
        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery-section">

        <div className="container">

          <div className="masonry-gallery">

            {images.map((image, index) => (

              <div
                key={index}
                className={`gallery-item ${getClass(index)}`}
                onClick={() => setSelected(index)}
              >

                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />

                <div className="gallery-content">

                  <div className="gallery-icon">
                    📷
                  </div>

                  <h3>School Memories</h3>

                  <p>Click To View</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}

      {selected !== null && (

        <div
          className="lightbox"
          onClick={() => setSelected(null)}
        >

          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <button
              className="nav-btn prev"
              onClick={prevImage}
            >
              ❮
            </button>

            <img
              src={images[selected]}
              alt=""
              className="lightbox-image"
            />

            <button
              className="nav-btn next"
              onClick={nextImage}
            >
              ❯
            </button>

            <div className="image-number">
              {selected + 1} / {images.length}
            </div>

          </div>

        </div>

      )}

    </div>
  );
}