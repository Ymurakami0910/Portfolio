import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


// import all pages that website contains 
import Layout from './components/layout';
import Home from './pages/home';
import Projects from './pages/project';
import About from './pages/about';
import Contact from './pages/contact';
import KissaTanpopo from './project/KissaTanpopo';
import Celestial from './project/Celestial';
import CraftedCorners from './project/CraftedCorner';
import Blenz from './project/Blenz';
import Boba from "./project/ShearDelightBoba"
import Photography from "./project/Photography"

import ScrollToTop from './components/scrollTop';

// slick slider css for project page 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

function App() { 



  return (
    <Router >
      <ScrollToTop/> 
      <Routes>
        <Route path="/Portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/kissa-tanpopo" element={<KissaTanpopo />} />
          <Route path="project/celestial" element={<Celestial />} />
          <Route path="project/craftedCorners" element={<CraftedCorners />} />
          <Route path="project/redesign" element={<Blenz />} />
          <Route path="project/ShearDelightBoba" element={<Boba />} />
          <Route path="project/Photography" element={<Photography/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
