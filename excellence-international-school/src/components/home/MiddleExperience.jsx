import "./MiddleExperience.css";

import { motion } from "framer-motion";

import middleImage from "../../assets/images/Middle.png.webp";

import {
  FaBookOpen,
  FaLightbulb,
  FaUsers
} from "react-icons/fa";


const MiddleExperience =()=>{


const points=[

{
icon:<FaBookOpen/>,
title:"Strong Academics",
text:"Building strong concepts through engaging learning methods."
},

{
icon:<FaLightbulb/>,
title:"Creative Thinking",
text:"Encouraging curiosity, innovation and problem solving."
},

{
icon:<FaUsers/>,
title:"Personal Growth",
text:"Helping students develop confidence and leadership skills."
}

];


return(

<section className="middle-section">


<div className="container middle-container">


<motion.div

className="middle-image"

initial={{
opacity:0,
x:-60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<img 
src={middleImage}
alt="Middle School"
/>


</motion.div>




<motion.div

className="middle-content"

initial={{
opacity:0,
x:60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<span>
MIDDLE SCHOOL
</span>


<h2>
Building Confidence
For A Brighter Future
</h2>


<p>

Our middle school program focuses on academic excellence,
creative thinking and overall personality development.

</p>



<div className="middle-points">


{
points.map((item,index)=>(


<div 
className="middle-card"
key={index}
>


<div className="middle-icon">

{item.icon}

</div>


<div>

<h3>
{item.title}
</h3>

<p>
{item.text}
</p>

</div>


</div>


))
}


</div>


</motion.div>


</div>


</section>


)


}


export default MiddleExperience;