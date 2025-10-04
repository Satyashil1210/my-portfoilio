import { useEffect } from "react";

const usePortfolioEffects = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const listeners = [];

    anchors.forEach((anchor) => {
      const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      };
      anchor.addEventListener("click", handleClick);
      listeners.push({ anchor, handleClick });
    });

    // Cleanup
    return () => {
      reveals.forEach((el) => observer.unobserve(el));
      listeners.forEach(({ anchor, handleClick }) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);
};

export default usePortfolioEffects;
