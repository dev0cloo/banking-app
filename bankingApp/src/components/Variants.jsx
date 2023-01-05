// creates custom animations for each variant
// clean up codebase
import { delay, motion, useTransform } from "framer-motion";
import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to, textBefore, textAfter }) {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 3.3,
      onUpdate(value) {
        ref.current.textContent =textBefore + value.toFixed(0) + textAfter;
      }
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
}

export default Counter;

export const text = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
};

export const textChild = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
};

export const normalText = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: 1.5, ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },

  header:{
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" }
  },
  para:{
    opacity: 1,
    x: 0,
    transition: { delay:.5, duration: 1, ease: "easeInOut" }
  }
};

export const button = {
    hidden:{
         opacity: 0, y: -100 
    },
  hov: {
    scale: 1.1,
    ease: "easeInOut",
    transition: { duration: 0.3 , dampening: 10},
  },
  click: {
    scale: 0.9,
    transition: { duration: 0.15 },
    ease: "easeInOut",
  },
};

export const card={
    hidden:{
        opacity: 0, x: 100 
    },
    
    visible:{
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" }
    },
    image:{
        opacity:1, scale:1, transition:{duration: 1, delay:.5}
    }
}

// export const background = {useTransform([ "background: radial-gradient( 64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%,#5ce1e6 71.54%,#33bbcf 100%)"]
// )
//     return(
//     <motion.h2 style={{background}}>What people are
//     <br className="sm:block hidden" /> saying about us</motion.h2>
// )}
    
