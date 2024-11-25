'use client';

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const useAnimation = () => {
  type AnimationFunction = (
    elem: string | Element | null,
  ) => void;

  // const slideInTop: AnimationFunction = (elem) => {
  //   if (!elem) return;
  //   gsap.fromTo(
  //     elem,
  //     {
  //       opacity: 0,
  //       y: -200,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       delay: 0.4,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top 70%",
  //         end: "bottom center",
  //         markers: false,
  //       },
  //     }
  //   );
  // };

  const slideInLeft: AnimationFunction = (elem) => {
    if (!elem) return;
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: "top 70%",
          end: "bottom center",
          markers: false,
        },
      }
    );
  };

  const slideInRight: AnimationFunction = (elem) => {
    if (!elem) return;
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: "top 70%",
          end: "bottom center",
          markers: false,
        },
      }
    );
  };

  const appear: AnimationFunction = (elem) => {
    if (!elem) return;
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: "top 70%",
          end: "bottom center",
          markers: false,
        },
      }
    );
  };

  return {
    // slideInTop,
    slideInLeft,
    slideInRight,
    appear,
  };
};

export default useAnimation;
