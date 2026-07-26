import "./LearningApproach.css";


const LearningApproach = () => {


const methods = [

{
title:"Interactive Classroom Learning",
text:"Students participate in discussions, activities and collaborative learning to improve understanding."
},


{
title:"Digital Learning Tools",
text:"Smart classroom technology helps students understand concepts through visual and engaging methods."
},


{
title:"Practical Examples",
text:"Real-life examples make difficult concepts easier and more meaningful for students."
},


{
title:"Group Activities",
text:"Team activities encourage cooperation, creativity and communication skills."
}

];



const values = [

"Respect",
"Honesty",
"Discipline",
"Responsibility",
"Cooperation"

];



return (

<section className="learning-section">


<div className="container">





{/* Modern Teaching */}


<div className="learning-header">


<span>
Modern Education
</span>


<h2>
Modern Teaching Methods
</h2>


<p>

To remain among the top primary schools in Aligarh,
Excellence International School follows modern and
student-centered teaching techniques.

</p>


</div>





<div className="method-grid">


{
methods.map((item,index)=>(

<div 
className="method-card"
key={index}
>


<div className="method-number">

0{index+1}

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






{/* Faculty */}



<div className="faculty-box">



<div className="faculty-content">


<h2>
Experienced and Supportive Faculty
</h2>


<p>

Qualified teachers guide students with dedication,
patience and care. Individual attention and continuous
monitoring help every student improve.

</p>



<ul>


<li>
Individual attention for students
</li>


<li>
Doubt clearing sessions
</li>


<li>
Regular performance monitoring
</li>


<li>
Positive encouragement
</li>


<li>
Supportive discipline system
</li>



</ul>


</div>



<div className="faculty-image">


<div className="circle">

Teacher

</div>


</div>



</div>







{/* Safety + Values */}



<div className="safety-grid">



<div className="safety-card">


<h2>
Safe & Disciplined Campus
</h2>


<p>

A secure and organized environment allows students
to focus on learning and personal growth.

</p>


<ul>

<li>CCTV Surveillance</li>

<li>Supervised Activities</li>

<li>Clean Learning Environment</li>

<li>Structured Discipline System</li>


</ul>



</div>






<div className="values-card">


<h2>
Building Values Early
</h2>



<p>

Along with academics, students develop strong moral
values and positive habits.

</p>




<div className="value-list">


{
values.map((value,index)=>(

<span key={index}>
{value}
</span>

))
}



</div>



</div>



</div>






</div>


</section>


);


};


export default LearningApproach;