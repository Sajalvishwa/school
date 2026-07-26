import "./PrimaryHero.css";

import heroImage from "../../../assets/images/Best-Primary-School.jpg.jpeg.webp";


const PrimaryHero = () => {


return (

<section className="primaryHero">


<div className="shape shape-one"></div>
<div className="shape shape-two"></div>
<div className="shape shape-three"></div>



<div className="container primaryHero-container">



{/* LEFT */}

<div className="primaryHero-left">


<span className="hero-badge">
Admissions Open 2026-2027
</span>



<h1>

Best <span>Primary School</span>
<br/>
in Aligarh

</h1>



<p>

Excellence International School is recognized as one of the
Best Primary Schools in Aligarh, providing a strong academic
foundation, disciplined environment and balanced development
for young learners.

</p>



<p>

Our primary section focuses on creativity, confidence,
communication skills and concept-based learning to prepare
students for future academic success.

</p>



<ul className="hero-list">


<li>
Strong Academic Foundation
</li>


<li>
Modern Teaching Methods
</li>


<li>
Experienced Teachers
</li>


<li>
Safe & Secure Campus
</li>


</ul>


</div>





{/* RIGHT */}


<div className="primaryHero-right">


<div className="image-wrapper">


<img

src={heroImage}

alt="Best Primary School in Aligarh"

className="hero-image"

/>


</div>




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
Class 1
</option>


<option>
Class 2
</option>


<option>
Class 3
</option>


<option>
Class 4
</option>


<option>
Class 5
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


export default PrimaryHero;