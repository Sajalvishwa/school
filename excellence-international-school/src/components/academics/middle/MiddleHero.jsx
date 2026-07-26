import "./MiddleHero.css";

import heroImage from "../../../assets/images/Middle.png.webp";

const MiddleHero = () => {
  return (
    <section className="preHero">

      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <div className="shape shape-three"></div>

      <div className="container preHero-container">

        <div className="preHero-left">

          <span className="hero-badge">
            Admissions Open 2026-2027
          </span>

          <h1>
            Best <span>Middle School</span>
            <br />
            in Aligarh
          </h1>

          <p>
            Excellence International School provides quality middle school
            education that strengthens academics, develops confidence,
            and prepares students for higher education.
          </p>

          <p>
            Our middle school curriculum focuses on concept-based learning,
            critical thinking, communication skills, and overall personality
            development.
          </p>

          <ul className="hero-list">
            <li>Strong Academic Curriculum</li>
            <li>Experienced Faculty</li>
            <li>Smart Classrooms</li>
            <li>Holistic Development</li>
          </ul>

        </div>

        <div className="preHero-right">

          <div className="image-wrapper">
            <img
              src={heroImage}
              alt="Best Middle School in Aligarh"
              className="hero-image"
            />
          </div>

          <div className="enquiry-card">

            <h2>Quick Enquiry</h2>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />

            <select>
              <option>Select a Grade</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
            </select>

            <textarea placeholder="Message" />

            <button>Submit Enquiry</button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MiddleHero;