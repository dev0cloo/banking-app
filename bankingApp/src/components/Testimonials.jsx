import React from "react";
import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";
import { textChild } from "./Variants";


const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
  >
    <div className={`absolute z-[0] w-[60%] -right-[50%] h-[50%] rounded-full blue__gradient`} />

    <div
      className={`w-full flex md:flex-row flex-col sm:mb-16 justify-between items-center relative z-[1] mb-6`}
    >
      <motion.h2 variants={textChild} initial="hidden" whileInView="visible" className={`${styles.heading2} text-gradient`}>
        What people are
        <br className="sm:block hidden" /> saying about us
      </motion.h2>
      <div className="w-full md:mt-0 mt-6">
        <motion.p initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,}} className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </motion.p>
      </div>
    </div>
    <div className={`flex flex-row flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]  mt-20`}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
