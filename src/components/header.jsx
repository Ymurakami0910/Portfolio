import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        {/* Logo that links to Home */}
        <NavLink to="/" className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </NavLink>
        {/* Navigation Links */}
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;


