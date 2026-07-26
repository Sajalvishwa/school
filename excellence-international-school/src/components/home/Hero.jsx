// ==========================================
// Imports
// ==========================================

import "./Hero.css";

import { motion } from "framer-motion";

import {
  HiArrowRight,
  HiAcademicCap,
} from "react-icons/hi";

import {
  FaAward,
  FaUsers,
  FaSchool,
} from "react-icons/fa";

import heroImage from "../../assets/images/Home-Banner-02.jpg.jpeg.webp";

// ==========================================
// Component
// ==========================================

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Shapes */}

      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <div className="shape shape-three"></div>

      <div className="container hero-container">

        {/* =========================
            Left
        ========================= */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >

            <HiAcademicCap />

            Admissions Open 2026 - 2027

          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
          >

            Learn.

            <br />

            Play.

            <br />

            Grow Together.

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
          >

            Excellence International School inspires
            young minds through joyful learning,
            creativity, modern education and a safe,
            caring environment where every child
            grows with confidence.

          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
          >

            <button className="primary-btn">

              Explore Campus

              <HiArrowRight />

            </button>

            <button className="secondary-btn">

              Apply Now

            </button>

          </motion.div>

        </motion.div>

        {/* =========================
            Right
        ========================= */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
        >

          <div className="image-circle"></div>

          <img
            src={heroImage}
            alt="Hero"
            className="hero-image"
          />

        </motion.div>

      </div>

      {/* =========================
          Floating Cards
      ========================= */}

      

      <div className="floating-card card-two">

        <FaUsers />

        <div>

          <h3>5000+</h3>

          <p>Students</p>

        </div>

      </div>

      <div className="floating-card card-three">

        <FaSchool />

        <div>

          <h3>100%</h3>

          <p>Results</p>

        </div>

      </div>

      {/* =========================
          Scroll
      ========================= */}

      <div className="scroll-down">

        <span></span>

      </div>

    </section>
  );
};

export default Hero;