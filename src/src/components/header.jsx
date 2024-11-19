import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      {/*logo */}
      <NavLink to="/" className={styles.logo}>
        <img src="src/assets/logo.png" alt="Logo" />
      </NavLink>

      {/* mobile menu*/}
      <div className={styles.menuIcon} onClick={handleMenuToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* mobile opened */}
      <div className={`${styles.navOverlay} ${isMenuOpen ? styles.navOpen : ''}`}>
        {/* close btn*/}
        <button className={styles.closeButton} onClick={handleMenuToggle}>
          ×
        </button>

        <nav className={styles.nav}>
          <NavLink to="/project" className={styles.navLink}>Projects</NavLink>
          <NavLink to="/about" className={styles.navLink}>About Me</NavLink>
          <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
