import { SectionEight } from "./Sections/SectionEight";
import { SectionFive } from "./Sections/SectionFive";
import { SectionFour } from "./Sections/SectionFour";
import { SectionOne } from "./Sections/SectionOne";
import { SectionSeven } from "./Sections/SectionSeven";
import { SectionSix } from "./Sections/SectionSix";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";
import Lenis from "@studio-freight/lenis";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


function App() {

  // const lenis = new Lenis({
  //   duration: 1, 
  //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  //   direction: "vertical", 
  //   gestureDirection: "vertical", 
  //   smooth: true,
  //   mouseMultiplier: 0.5, 
  //   smoothTouch: false, 
  //   touchMultiplier: 2, 
  //   infinite: false 
  // });
  
  
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }
  
  
  // requestAnimationFrame(raf);

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    tl

    .to(".one-main-text", { yPercent:'20' , opacity: 0,
    scrollTrigger: {
        trigger: ".two",
        start:"top center",
        end: "top 90%", scrub: 1,
        immediateRender: false
    }})

    .to(".background-phone", { xPercent:'-20' , opacity: 0,
    scrollTrigger: {
        trigger: ".two",
        start:"top center",
        end: "top 90%", scrub: 1,
        immediateRender: false
    }})

    .to(".two-main-text", { yPercent:'-20' , opacity: 1,
    scrollTrigger: {
        trigger: ".two",
        start:"top center",
        end: "top 10%", scrub: 1,
        immediateRender: false
    }})

    .to(".bk-phone-two", {xPercent:'20' , opacity: 1,
    scrollTrigger: {
        trigger: ".two",
        start:"top center",
        end: "top 10%", scrub: 1,
        immediateRender: false
    }})

    .to(".purple-box", { opacity: 1,
    scrollTrigger: {
        trigger: ".two",
        start:"top center",
        end: "top 10%", scrub: 1,
        immediateRender: false
    }})

    .to(".three-main-text", { opacity: 1,
    scrollTrigger: {
        trigger: ".three",
        start:"top center",
        end: "top 10%", scrub: 1,
        immediateRender: false
    }})

    .to(".bk-phone-three", {xPercent:'20' , opacity: 1,
    scrollTrigger: {
        trigger: ".three",
        start:"top center",
        end: "top 10%", scrub: 1,
        immediateRender: false
    }})

      .to(".bk-hand, .bk-stars, .bk-hand-two, .bk-light, .four-main-text", { opacity: 1,
        scrollTrigger: {
            trigger: ".four",
            start:"top center",
            end: "top 10%", scrub: 1,
            immediateRender: false
        }})

        .to(".bk-bench, .bk-road, .bk-grass, .five-main-text", { opacity: 1,
          scrollTrigger: {
              trigger: ".five",
              start:"top center",
              end: "top 10%", scrub: 1,
              immediateRender: false
          }})

          .to(".bk-heart", {xPercent:'5' , opacity: 1,
          scrollTrigger: {
              trigger: ".six",
              start:"top center",
              end: "top 10%", scrub: 1,
              immediateRender: false
          }})

          .to(".six-main-text", { opacity: 1,
            scrollTrigger: {
                trigger: ".six",
                start:"top center",
                end: "top 10%", scrub: 1,
                immediateRender: false
            }})
            .to(".bk-g-emoji, .bk-g-triangle, .bk-g-phone, .seven-main-text", { opacity: 1,
              scrollTrigger: {
                  trigger: ".seven",
                  start:"top center",
                  end: "top 10%", scrub: 1,
                  immediateRender: false
              }})

              .to(".bk-phone-eight, .bk-h-emoji, .bk-eight, .eight-main-text", { opacity: 1,
                scrollTrigger: {
                    trigger: ".eight",
                    start:"top center",
                    end: "top 10%", scrub: 1,
                    immediateRender: false
                }})
    

  }, [])


    return (
      <>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />   
            <SectionEight />         
      </>
    )
}

export default App;