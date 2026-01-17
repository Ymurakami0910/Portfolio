gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.fade-section').forEach(section => {
  gsap.fromTo(section, 
    { opacity: 0, y: 10 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: section, 
        start: "top 75%", 
        toggleActions: "play none none none", 
      }
    }
  );
});
