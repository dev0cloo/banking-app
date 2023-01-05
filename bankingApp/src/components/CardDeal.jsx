import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { normalText, button } from "./Variants";
import { motion } from "framer-motion";

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <motion.h2
        variants={normalText}
        initial="hidden"
        whileInView="header"
        className={`${styles.heading2} mt-5`}
      >
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </motion.h2>
      <motion.p
        variants={normalText}
        initial="hidden"
        whileInView="header"
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Search for a better credit card deal in seconds with our easy-to-use
        comparison tool.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView={{ opacity: [0,.5,1], y: [0,15,0],  transition:{
          duration: 1,
          times:[0,.5,1],
          delay: 1,
          
        }} }
        whileHover="hov" variants={button}
        whileTap="click">
        <Button styles="mt-10" />
      </motion.div>
    </div>
    <div className={`${layout.sectionImg}`}>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,

          transition: {
            duration: 1.5,

            delay: 0.2,
          },
        }}
        src={card}
        alt="card"
        className={`w-[100%] h-[100%]`}
      />
    </div>
  </section>
);

export default CardDeal;
