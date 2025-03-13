import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from 'lenis';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure lenis is initialized
    const lenis = new Lenis({
      autoRaf: true,
      duration: 2,
    });

    // Scroll to top using lenis scroll
    lenis.scrollTo(0);

    return () => {
      lenis.destroy(); // Cleanup Lenis when the component unmounts
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
