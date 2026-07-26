import "./FAQ.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Where is Excellence International School located?",
    answer:
      "Excellence International School is located in Aligarh and provides quality education in a safe, supportive, and student-friendly learning environment.",
  },

  {
    question: "Which classes are available for admission?",
    answer:
      "Admissions are open for multiple academic levels, depending on seat availability.",
  },

  {
    question: "Does the school provide extracurricular activities?",
    answer:
      "Yes. Students actively participate in sports, cultural events, music, dance, arts, and personality development programs that encourage creativity, confidence, and overall growth.",
  },

  {
    question: "Is transportation available for students?",
    answer:
      "Yes. The school provides safe and convenient transportation facilities across different routes with a strong focus on student safety.",
  },

  {
    question:
      "What makes Excellence International School one of the best schools in Aligarh?",
    answer:
      "The school focuses on academic excellence, modern teaching methods, experienced faculty, value-based education, and the holistic development of every child.",
  },
];

const FAQs = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <div className="faq-heading">

          <span>FAQs</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to the most commonly asked questions about
            admissions, academics, transportation, and student life at
            Excellence International School.
          </p>

        </div>

        <div className="faq-container">

          {faqs.map((item, index) => (

            <motion.div
              key={index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >

              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >

                <h3>{item.question}</h3>

                {active === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >

                    <p>{item.answer}</p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQs;