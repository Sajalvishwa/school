import "./Programs.css";

import { useState, useEffect } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";


import concept from "../../assets/images/Concept-Based-Learning.png.webp";
import daycare from "../../assets/images/day-care-300x200.png.webp";
import prePrimary from "../../assets/images/Pre-Primary-School.png.webp";
import primary from "../../assets/images/Primary-School.png.webp";
import sports from "../../assets/images/Sports-and-Physical-Education.png.webp";
import safe from "../../assets/images/Safe-and-Secure-Campus.png.webp";
import academic from "../../assets/images/Strong-Academic-System.png.webp";



const programs = [


{
image:prePrimary,

title:"Modern Infrastructure for Effective Learning",

story:
"A well-planned campus environment enhances the learning experience. Excellence International School provides modern facilities that support both academic and extracurricular development.",

points:[
"Modern learning environment",
"Student friendly campus",
"Academic & extracurricular support"
]

},



{
image:concept,

title:"Skill Based Learning",

story:
"Skill-based learning helps students think creatively and logically. It encourages them to apply their knowledge practically and develop innovative ideas.",

points:[
"Creative thinking",
"Logical reasoning",
"Real-life problem solving"
]

},



{
image:primary,

title:"Experiential Learning",

story:
"Experiential learning connects classroom knowledge with real-life experiences. This method encourages active participation, practical understanding and deeper engagement with learning.",

points:[
"Learning by experience",
"Practical knowledge",
"Active participation"
]

},



{
image:daycare,

title:"Community Service",

story:
"Community service activities help students understand social responsibility and empathy. By interacting with different communities, students develop awareness, compassion and interpersonal skills.",

points:[
"Social responsibility",
"Empathy development",
"Communication skills"
]

},



{
image:academic,

title:"STREAM Education",

story:
"STREAM education integrates Science, Technology, Reading, Engineering, Arts and Mathematics to build strong analytical and creative thinking abilities.",

points:[
"Critical thinking",
"Innovation skills",
"Problem solving abilities"
]

},



{
image:sports,

title:"Physical Development Programs",

story:
"Physical programs and sports activities help build physical strength, leadership skills, strategic thinking and healthy lifestyle habits.",

points:[
"Physical strength",
"Leadership skills",
"Teamwork habits"
]

},



{
image:safe,

title:"Visual & Performing Arts",

story:
"Artistic activities such as music, dance, drawing, drama and creative expression help develop imagination and emotional intelligence.",

points:[
"Creative expression",
"Better communication",
"Personality development"
]

}


];





const Programs =()=>{


const [active,setActive]=useState(0);



const nextSlide=()=>{

setActive((prev)=>
(prev+1)%programs.length
);

};



const prevSlide=()=>{

setActive((prev)=>
(prev-1+programs.length)%programs.length
);

};



useEffect(()=>{


const timer=setInterval(()=>{

nextSlide();

},5000);



return()=>clearInterval(timer);


},[]);




const current=programs[active];




return(

<section className="programs">


<div className="container">



<div className="program-heading">


<span>
OUR PROGRAMS
</span>


<h2>
Learning Beyond Classrooms 🌈
</h2>


<p>
We provide opportunities that help children
learn, explore, create and grow.
</p>


</div>





<div className="program-wrapper">



{/* LEFT STORY */}


<div className="program-story">


<h2>
{current.title}
</h2>



<p>
{current.story}
</p>




<ul>

{
current.points.map((point,index)=>(

<li key={index}>

<FaCheckCircle/>

{point}

</li>

))

}

</ul>


</div>






{/* RIGHT IMAGE SLIDER */}



<div className="program-slider">


<img

src={current.image}

alt={current.title}

/>





<button

className="program-arrow left"

onClick={prevSlide}

>

<FaArrowLeft/>

</button>





<button

className="program-arrow right"

onClick={nextSlide}

>

<FaArrowRight/>

</button>



</div>



</div>




</div>


</section>

)

}



export default Programs;