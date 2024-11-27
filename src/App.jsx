import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Projects from './pages/project';
import About from './pages/about';
import Contact from './pages/contact';
import KissaTanpopo from './project/KissaTanpopo';
import Celestial from './project/Celestial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/kissa-tanpopo" element={< KissaTanpopo/>} />
          <Route path="project/celestial" element={< Celestial/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

