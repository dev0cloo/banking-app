import { motion } from "framer-motion";
// creates custom animations for each variant
export const text = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
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
};

export const button = {
    hidden:{
         opacity: 0, y: -100 
    },
  hov: {
    scale: 1.1,
    ease: "easeInOut",
    transition: { duration: 0.3 ,stiffiness:100, dampening: 10},
  },
  click: {
    scale: 0.9,
    transition: { duration: 0.15 },
    ease: "easeInOut",
  },
};
