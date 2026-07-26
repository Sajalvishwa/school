import { useState } from "react";
import "./PrePrimaryFAQ.css";

const faqs = [
  {
    question:
      "Why is Excellence International School considered one of the best pre primary schools in Aligarh?",
    answer:
      "Excellence International School is considered among the best pre primary schools in Aligarh because of its play-based learning approach, safe environment, experienced teachers, child-friendly classrooms, and focus on the overall development of every child.",
  },
  {
    question: "What age group is eligible for pre primary classes?",
    answer:
      "Our Pre Primary section generally welcomes children between 2½ to 6 years of age, depending on the program such as Playgroup, Nursery, LKG, and UKG.",
  },
  {
    question: "What teaching methods are used in pre primary education?",
    answer:
      "We follow play-based, activity-oriented, and concept-based learning through storytelling, rhymes, art, music, games, and interactive classroom activities.",
  },
  {
    question:
      "Are extracurricular activities included in the pre primary program?",
    answer:
      "Yes. Students participate in music, dance, art & craft, storytelling, celebrations, indoor and outdoor games, and creative activities to support holistic development.",
  },
  {
    question: "Is the school environment safe for young children?",
    answer:
      "Absolutely. The campus features CCTV surveillance, child-friendly classrooms, caring staff, secure entry and exit, and supervised activities to ensure every child's safety.",
  },
];

const PrePrimaryFAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="preFaq">
      <div className="container">

        <div className="sectionHeading">
          <span>Frequently Asked Questions</span>

          <h2>Got Questions?</h2>

          <p>
            Find answers to the most common questions about our Pre Primary
            Program and admission process.
          </p>
        </div>

        <div className="faqWrapper">
          {faqs.map((faq, index) => (
            <div
              className={`faqItem ${
                active === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faqQuestion"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <span>{active === index ? "−" : "+"}</span>
              </button>

              {active === index && (
                <div className="faqAnswer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrePrimaryFAQ;