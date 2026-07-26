import "./AboutHero.css";
import aboutImage from "../../assets/images/About-US2.png.webp";

const AboutHero = () => {
  return (
    <section className="aboutHero">
      {/* Background Shapes */}
      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <div className="shape shape-three"></div>

      <div className="container aboutHero-container">
        {/* Left */}
        <div className="aboutHero-left">
          <div className="aboutHero-badge">
            ⭐ Excellence International School
          </div>

          <h1>
            About <span>Excellence</span>
            <br />
            International School
          </h1>

          <p>
            Excellence International School is one of the leading schools in
            Aligarh, committed to academic excellence, strong values, modern
            education, and the holistic development of every child. We nurture
            confident learners, responsible citizens, and future leaders.
          </p>

          <div className="aboutHero-buttons">
            

            
          </div>
        </div>

        {/* Right */}
        <div className="aboutHero-right">
         

          <img
            src={aboutImage}
            alt="About Excellence International School"
            className="aboutHero-image"
          />

          <div className="floating-card card-one">
            <div>
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

          <div className="floating-card card-two">
            <div>
              <h3>100%</h3>
              <p>Student Focused</p>
            </div>
          </div>

          <div className="floating-card card-three">
            <div>
              <h3>Future</h3>
              <p>Ready Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;