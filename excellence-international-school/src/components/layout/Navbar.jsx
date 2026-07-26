import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";

import logo from "../../assets/logos/Excellence-Logo.png.webp";
import { NAV_LINKS } from "../../utils/constants";

import "./Navbar.css";


const Navbar = () => {


  const [open, setOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);



  useEffect(() => {


    let lastScroll = window.scrollY;



    const handleScroll = () => {


      let currentScroll = window.scrollY;



      if(currentScroll > lastScroll && currentScroll > 100){

        setShowNavbar(false);

        setOpen(false);

      }

      else{

        setShowNavbar(true);

      }



      lastScroll = currentScroll;


    };



    window.addEventListener(
      "scroll",
      handleScroll
    );



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);





  return (


<header className={`navbar ${showNavbar ? "show" : "hide"}`}>



<div className="container">



<nav className="navbar-container">





{/* LOGO */}

<Link 
to="/" 
className="logo"
onClick={()=>setOpen(false)}
>


<img
src={logo}
alt="Excellence International School"
className="logo-image"
/>



<div className="logo-content">

<h2>
Excellence
</h2>


<h3>
International School
</h3>


<span>
Character • Discipline • Learning
</span>


</div>


</Link>







{/* DESKTOP MENU */}


<ul className="nav-links">


{
NAV_LINKS.map((link)=>(


<li key={link.id}>


<NavLink

to={link.path}

className={({isActive})=>

isActive 
?
"nav-link active"
:
"nav-link"

}

>


{link.name}


</NavLink>


</li>


))

}



</ul>







{/* APPLY BUTTON */}


<button className="apply-btn">


Apply Now

<HiArrowRight/>


</button>








{/* MOBILE BUTTON */}


<button

className="mobile-menu-btn"

onClick={()=>setOpen(!open)}

>


{

open ?

<HiX/>

:

<HiMenu/>

}


</button>





</nav>







{/* MOBILE MENU */}



<div 

className={`mobile-menu ${open ? "show":""}`}

>



{

NAV_LINKS.map((link)=>(


<NavLink

key={link.id}

to={link.path}

onClick={()=>setOpen(false)}

className={({isActive})=>

isActive

?

"mobile-link active"

:

"mobile-link"

}

>


{link.name}


</NavLink>



))


}



<button className="mobile-apply">


Apply Now

<HiArrowRight/>


</button>



</div>




</div>


</header>



);


};


export default Navbar;