import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../assets/logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close the overlay
  };

  return (
    <header className={styles.headerContainer}>
      {/* Logo */}
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
