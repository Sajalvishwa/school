import "./WhyChooseMiddle.css";

import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaMedal,
  FaBrain,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Strong Academic Foundation",
    text: "A structured curriculum that strengthens concepts and prepares students for higher classes.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    text: "Dedicated teachers provide individual attention and continuous academic guidance.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Learning",
    text: "Technology-enabled classrooms make learning interactive, engaging, and practical.",
  },
  {
    icon: <FaBrain />,
    title: "Critical Thinking",
    text: "Students are encouraged to analyze, question, and solve problems with confidence.",
  },
  {
    icon: <FaUsers />,
    title: "Holistic Development",
    text: "Sports, cultural activities, leadership, and teamwork help students grow beyond academics.",
  },
  {
    icon: <FaMedal />,
    title: "Future Ready",
    text: "The middle school program prepares students for secondary education and lifelong success.",
  },
];

const WhyChooseMiddle = () => {
  return (
    <section className="whyMiddle">
      <div className="container">

        <div className="section-header">
          <span>Why Choose Us</span>
          <h2>Why Choose Excellence Middle School?</h2>
          <p>
            Our middle school program builds confidence, academic excellence,
            leadership, and life skills through modern education practices.
          </p>
        </div>

        <div className="middle-grid">
          {features.map((item, index) => (
            <div className="middle-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMiddle;