import "./PrePrimaryHero.css";

import heroImage from "../../../assets/images/Best-Pre-Primary-School-in-Aligarh.png.webp";


const PrePrimaryHero = () => {

  return (

    <section className="preHero">


      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <div className="shape shape-three"></div>



      <div className="container preHero-container">



        {/* LEFT CONTENT */}

        <div className="preHero-left">


          <span className="hero-badge">
            Admissions Open 2026-2027
          </span>



          <h1>
            Best <span>Pre Primary School</span>
            <br />
            in Aligarh
          </h1>



          <p>
            Excellence International School is a trusted Pre Primary School
            in Aligarh, providing a joyful, safe and nurturing environment
            for young learners.
          </p>



          <p>
            The pre-primary program focuses on play-based learning,
            creativity and activities that build strong foundations
            for future education.
          </p>



          <ul className="hero-list">

            <li>
              Play Based Learning
            </li>

            <li>
              Safe & Secure Campus
            </li>

            <li>
              Experienced Teachers
            </li>

            <li>
              Activity Based Education
            </li>

          </ul>


        </div>




        {/* RIGHT CONTENT */}


        <div className="preHero-right">


          <div className="image-wrapper">

            <img
              src={heroImage}
              alt="Best Pre Primary School in Aligarh"
              className="hero-image"
            />

          </div>



          {/* ENQUIRY FORM */}

          <div className="enquiry-card">


            <h2>
              Quick Enquiry
            </h2>



            <input
              type="text"
              placeholder="Your Name"
            />


            <input
              type="email"
              placeholder="Your Email"
            />


            <input
              type="tel"
              placeholder="Phone Number"
            />



            <select>

              <option>
                Select a Grade
              </option>

              <option>
                Playgroup
              </option>

              <option>
                Nursery
              </option>

              <option>
                LKG
              </option>

              <option>
                UKG
              </option>

            </select>



            <textarea
              placeholder="Message"
            />


            <button>
              Submit Enquiry
            </button>


          </div>


        </div>


      </div>


    </section>

  );

};


export default PrePrimaryHero;