import "./Testimonials.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import img1 from "../../assets/images/5-.png.webp";
import img2 from "../../assets/images/6-.png.webp";
import img3 from "../../assets/images/10.png.webp";
import img4 from "../../assets/images/11-.png.webp";
import img5 from "../../assets/images/12.png.webp";

const testimonials = [
  {
    image: img1,
    name: "Neha Verma",
    role: "Mother of Anaya Verma • Grade III",
    review:
      "Excellence International School has created a wonderful learning environment for my child. The teachers are caring, supportive and always encourage creativity.",
  },
  {
    image: img2,
    name: "Pooja Mehta",
    role: "Mother of Riya Metha• class IV",
    review:
      "My daughter enjoys every single day at school. The activity-based learning has improved her confidence and communication skills beautifully.",
  },
  {
    image: img3,
    name: "Rakesh Sharma",
    role: "Father of Aarav Sharma • Grade V",
    review:
      "The balance between academics, sports and life skills is excellent. We are proud to be a part of the Excellence family.",
  },
  {
    image: img4,
    name: "Amit Gupta",
    role: "Father of Vivaan Gupta • Grade VII",
    review:
      "The school focuses on overall personality development rather than just marks. We have seen a huge positive change in our child.",
  },
  {
    image: img5,
    name: "Sanjay Patel",
    role: "Father of Krish Patel • Grade VI",
    review:
      "Safe campus, experienced teachers and modern teaching methods make this school one of the best choices for every parent.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="testimonial-title">
          <span>TESTIMONIALS</span>

          <h2>What Parents Say About Us ❤️</h2>

          <p>
            Trusted by hundreds of happy parents who believe in
            quality education and holistic development.
          </p>
        </div>

        <div className="testimonial-wrapper">

          <button
            className="arrow left-arrow"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >

              <div className="testimonial-image">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                />
              </div>

              <div className="testimonial-content">

                <FaQuoteLeft className="quote-icon" />

                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="testimonial-review">
                  "{testimonials[current].review}"
                </p>

                <h3>{testimonials[current].name}</h3>

                <span>{testimonials[current].role}</span>

              </div>

            </motion.div>

          </AnimatePresence>

          <button
            className="arrow right-arrow"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>

        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;