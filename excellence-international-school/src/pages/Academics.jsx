import { Link } from "react-router-dom";
import "./Academics.css";

import prePrimary from "../assets/images/Pre-Primary-School.png.webp";
import primary from "../assets/images/Primary-School.png.webp";
import middle from "../assets/images/Middle.png.webp";

const Academics = () => {
  const programs = [
    {
      title: "Pre Primary",
      image: prePrimary,
      description:
        "A joyful beginning through play-based learning, creativity, and early childhood development.",
      link: "/academics/pre-primary",
    },
    {
      title: "Primary",
      image: primary,
      description:
        "Building strong academic foundations with concept-based learning and overall personality development.",
      link: "/academics/primary",
    },
    {
      title: "Middle School",
      image: middle,
      description:
        "Preparing students with advanced academics, leadership skills, and confidence for future success.",
      link: "/academics/middle",
    },
  ];

  return (
    <section className="academics">
      <div className="container">

        <div className="academics-heading">

          <span className="section-badge">
            Excellence International School
          </span>

          <h1>Academic Programs</h1>

          <p>
            We provide a structured learning journey from early childhood to
            middle school, ensuring every student develops academically,
            socially, emotionally, and creatively.
          </p>

        </div>

        <div className="academics-grid">

          {programs.map((program, index) => (
            <div className="academic-card" key={index}>

              <img
                src={program.image}
                alt={program.title}
              />

              <div className="academic-content">

                <h2>{program.title}</h2>

                <p>{program.description}</p>

                <Link
                  to={program.link}
                  className="academic-btn"
                >
                  Explore Program →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Academics;