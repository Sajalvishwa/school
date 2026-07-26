import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Components
import ScrollToTop from "../components/common/ScrollToTop";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admission from "../pages/Admissions";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";

import Contact from "../pages/Contact";
import PrePrimary from "../pages/PrePrimary";
import Primary from "../pages/Primary";
import Middle from "../pages/MiddleSchool"




const AppRoutes = () => {

  return (

    <>
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="academics" element={<Academics />} />

          <Route path="admissions" element={<Admission/>} />

          <Route path="gallery" element={<Gallery />} />

          <Route path="blog" element={<Blog />} />

          <Route 
            path="academics/pre-primary" 
            element={<PrePrimary />} 
          />

          <Route 
            path="academics/primary" 
            element={<Primary />} 
          />

          <Route
            path="academics/middle"
            element={<Middle />}
          />

          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>

    </>

  );

};


export default AppRoutes;