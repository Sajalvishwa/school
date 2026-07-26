import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {


  const { pathname } = useLocation();



  useEffect(() => {


    // Disable browser automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }



    // Scroll top for desktop + mobile
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });



    // Extra support for mobile browsers
    setTimeout(() => {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });

    }, 50);



  }, [pathname]);



  return null;

};


export default ScrollToTop;