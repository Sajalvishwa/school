import "./PrimaryFAQ.css";


const PrimaryFAQ = () => {


const faqs = [

{
number:"01",
question:"Why is Excellence International School considered one of the best primary schools in Aligarh?",
answer:"The school provides strong academic foundation, modern teaching methods, experienced teachers, safe campus and overall personality development."
},


{
number:"02",
question:"Which classes are included in the primary section?",
answer:"The primary section includes Grade 1 to Grade 5 with a focus on academics, creativity and confidence building."
},


{
number:"03",
question:"Are extracurricular activities available?",
answer:"Yes, students participate in sports, cultural programs, art, music and creative activities for complete development."
},


{
number:"04",
question:"Is the campus safe for primary students?",
answer:"Yes, the campus provides CCTV surveillance, supervised activities and a secure learning environment."
},


{
number:"05",
question:"What subjects are taught in primary classes?",
answer:"Students learn English, Mathematics, Environmental Studies and skill-based activities."
},


{
number:"06",
question:"How can parents start the admission process?",
answer:"Parents can complete registration, submit required documents and follow the admission procedure guided by the school."
}


];



const stats=[

{
number:"500+",
text:"Happy Students"
},

{
number:"20+",
text:"Experienced Teachers"
},

{
number:"100%",
text:"Safe Campus"
},

{
number:"10+",
text:"Learning Activities"
}

];



return (


<section className="primary-faq">


<div className="container">



<div className="faq-title">


<span>
Parents Help Center
</span>


<h2>
Frequently Asked Questions
</h2>


<p>

Everything parents need to know about primary education,
admission and facilities at Excellence International School.

</p>


</div>






{/* TRUST STATS */}


<div className="trust-grid">


{
stats.map((item,index)=>(


<div 
className="trust-card"
key={index}
>


<h3>
{item.number}
</h3>


<p>
{item.text}
</p>


</div>


))

}


</div>







{/* FAQ CARDS */}



<div className="faq-grid">


{
faqs.map((item,index)=>(


<div 
className="faq-card"
key={index}
>


<div className="faq-number">

{item.number}

</div>



<h3>
{item.question}
</h3>


<p>
{item.answer}
</p>



</div>


))


}



</div>







{/* CTA */}


<div className="faq-cta">


<h2>
Admissions Open 2026-2027
</h2>


<p>

Give your child the right foundation for academic success
with Excellence International School.

</p>



<button>
Apply For Admission
</button>



</div>





</div>


</section>


);


};


export default PrimaryFAQ;