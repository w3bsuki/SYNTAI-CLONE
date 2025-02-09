"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".reveal");

    const elementInView = (el: Element, offset = 50) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add("active");
    };

    const hideScrollElement = (element: Element) => {
      element.classList.remove("active");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 50)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    // Initialize on mount
    handleScrollAnimation();

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScrollAnimation();
      });
    };
  }, []);
} 