import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./MiddleFAQ.css";

const faqData = [
  {
    question: "Why is Excellence International School one of the best middle schools in Aligarh?",
    answer:
      "The school offers a strong academic curriculum, experienced teachers, modern classrooms, value-based education, and holistic development programs that prepare students for higher education.",
  },
  {
    question: "Which classes are included in the middle school section?",
    answer:
      "The middle school section includes Classes VI, VII, and VIII with a balanced curriculum focused on academic excellence and skill development.",
  },
  {
    question: "Do students participate in extracurricular activities?",
    answer:
      "Yes. Students regularly participate in sports, cultural events, debates, art, music, science exhibitions, and leadership activities.",
  },
  {
    question: "Are smart classrooms available?",
    answer:
      "Yes. Modern smart classrooms equipped with digital learning tools make lessons more engaging and interactive.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Parents can contact the school, complete the admission form, submit the required documents, and attend the interaction or assessment process if applicable.",
  },
];

const MiddleFAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="middleFaq">

      <div className="container">

        <div className="faq-heading">

          <span>FAQs</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to common questions about our Middle School
            admission process, academics, and student life.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqData.map((faq, index) => (

            <div
              className={`faq-item ${active === index ? "active" : ""}`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                {active === index ? <FaMinus /> : <FaPlus />}

              </button>

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MiddleFAQ;