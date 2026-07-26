import "./AboutPreview.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import aboutImage from "../../assets/images/Concept-Based-Learning.png.webp";

const AboutPreview = () => {
  return (
    <section className="about-preview">

      <div className="container about-container">

        {/* Left */}

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <img
            src={aboutImage}
            alt="About School"
          />

        </motion.div>

        {/* Right */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span>ABOUT OUR SCHOOL</span>

          <h2>

            A Place Where Every Child
            Learns With Happiness.

          </h2>

          <p>

            Excellence International School provides
            a joyful learning environment where
            students develop confidence, creativity,
            discipline and strong academic foundations.

          </p>

          <div className="about-cards">

            <div>

              <h3>25+</h3>

              <p>Years of Excellence</p>

            </div>

            <div>

              <h3>5000+</h3>

              <p>Happy Students</p>

            </div>

          </div>

          <Link
            to="/about"
            className="about-btn"
          >

            Read More

            <HiArrowRight />

          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutPreview;