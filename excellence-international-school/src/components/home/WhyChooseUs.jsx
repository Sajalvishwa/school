import "./WhyChooseUs.css";

import { motion } from "framer-motion";

import {
  FaChalkboardTeacher,
  FaBookReader,
  FaBus,
  FaRunning,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBookReader />,
    title: "Smart Learning",
    text: "Activity based learning with modern teaching methods.",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher />,
    title: "Expert Teachers",
    text: "Highly qualified and caring faculty members.",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Digital Classrooms",
    text: "Technology enabled classrooms for better understanding.",
  },
  {
    id: 4,
    icon: <FaRunning />,
    title: "Sports & Activities",
    text: "Indoor and outdoor activities for all-round development.",
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    text: "24×7 security with CCTV monitored environment.",
  },
  {
    id: 6,
    icon: <FaBus />,
    title: "Transport",
    text: "Safe and reliable school transportation facilities.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why">

      <div className="container">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Giving Every Child
            <br />
            The Best Future
          </h2>

          <p>
            Excellence International School believes every child deserves
            quality education, modern facilities and endless opportunities.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (

            <motion.div
              className="why-card"
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;