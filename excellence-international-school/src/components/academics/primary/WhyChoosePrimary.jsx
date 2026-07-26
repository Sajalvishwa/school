import "./WhyChoosePrimary.css";


const WhyChoosePrimary = () => {


const features = [

{
title:"Strong Academic Basics",
text:"Building strong reading, writing and mathematical skills with concept-based learning."
},


{
title:"Reading & Communication Skills",
text:"Students develop vocabulary, confidence and effective communication abilities."
},


{
title:"Activity Based Learning",
text:"Interactive activities make learning enjoyable, practical and engaging."
},


{
title:"Discipline & Responsibility",
text:"Students learn discipline, teamwork and responsibility from an early stage."
},


{
title:"Personal Attention",
text:"Teachers provide individual guidance according to each student's learning needs."
},


{
title:"Regular Assessments",
text:"Weekly and monthly assessments help track improvement and academic growth."
}


];



return (


<section className="whyPrimary">


<div className="container">



<div className="section-title">


<span>
Why Choose Us
</span>


<h2>
Why Choose the Best Primary School in Aligarh?
</h2>


<p>

Excellence International School focuses on developing
strong learning habits, academic skills and confidence
among young learners.

</p>


</div>





<div className="feature-grid">


{
features.map((item,index)=>(


<div 
className="feature-card"
key={index}
>


<div className="icon">

✓

</div>



<h3>
{item.title}
</h3>



<p>
{item.text}
</p>


</div>



))
}



</div>





<div className="academic-box">



<h2>
Strong Academic Foundation
</h2>


<p>

The primary curriculum is designed to ensure concept clarity
and steady academic progress through structured syllabus,
regular practice and improvement sessions.

</p>




<ul>

<li>
Structured syllabus coverage
</li>


<li>
Concept understanding focused learning
</li>


<li>
Classwork and homework practice
</li>


<li>
Weekly and monthly evaluations
</li>


<li>
Revision and improvement sessions
</li>


</ul>



</div>





</div>



</section>


);


};


export default WhyChoosePrimary;