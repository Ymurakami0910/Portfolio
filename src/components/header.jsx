import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../assets/logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // tracks whether the mobile menu overlay is open (true) or closed (false).
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // When the menu icon or close button is clicked, this function toggles the state of isMenuOpen
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    // // Closes the menu when a navigation link is clicked
  };

  return (
    <header className={styles.headerContainer}>
      {/* Logo */}
      {/* The logo is clickable and navigates to the home page (/). */}
      <NavLink to="/" className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </NavLink>

      {/* Mobile menu icon */}
      <div className={styles.menuIcon} onClick={handleMenuToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`${styles.navOverlay} ${isMenuOpen ? styles.navOpen : ''}`}>
        {/* Close button */}
        {/* applies the navOpen class when isMenuOpen is true, making the menu visible */}
        <button className={styles.closeButton} onClick={handleMenuToggle}>
          ×
        </button>

        {/* Navigation links */}
        <nav className={styles.nav}>
          <NavLink to="/project" className={styles.navLink} onClick={handleNavLinkClick}>
            Projects
          </NavLink>
          <NavLink to="/about" className={styles.navLink} onClick={handleNavLinkClick}>
            About Me
          </NavLink>
          <NavLink to="/contact" className={styles.navLink} onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
