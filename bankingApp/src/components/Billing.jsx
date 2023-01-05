import React from "react";
import { bill, apple, google } from "../assets";
import { layout } from "../style"; //import the specific exported symbol 'layout' from the file '../style'
import styles from "../style"; //import the default export as styles
import { motion, useAnimationControls } from "framer-motion";
import { button, card } from "./Variants";

const Billing = () => (
  // section.Reverse lets the layout flip when on mobile
  // i.e text shows before the image
  <section id="product" className={`${layout.sectionReverse} gap-6`}>
    <div className={`${layout.sectionImgReverse}`}>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,

          transition: {
            duration: 1,

            delay: 0,
          },
        }}
        src={bill}
        alt="bills"
        className={`w-[100%] h-[100%] relative z-[5]`}
      />
      <div className="absolute z-[3] -left-1/2 top-0 h-[50%] w-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 h-[50%] w-[50%] rounded-full pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <motion.h2
        variants={button}
        initial="hidden"
        whileInView={{
          opacity: [0, 0.5, 1],
          y: [0, 15, 0],
          transition: {
            duration: 1,
            times: [0, 0.5, 1],
            delay: 0,
          },
        }}
        className={`${styles.heading2} `}
      >
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </motion.h2>
      <motion.p
        variants={button}
        initial="hidden"
        whileInView={{
          opacity: [0, 0.5, 1],
          y: [0, 15, 0],
          transition: {
            duration: 1,
            times: [0, 0.5, 1],
            delay: 0.5,
          },
        }}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        With our online banking platform, you can easily view and manage your
        billing and invoices at any time. You can view the details of each
        invoice, download a copy for your records, and even make payments
        directly from the platform. With these tools at your fingertips, you can
        stay on top of your billing and keep your finances organized with ease.
      </motion.p>
      <motion.div
        className={`flex flex-row gap-5 flex-wrap sm:mt-10 mt-6 items-center`}
      >
        <motion.img
         initial={{ scale: 1.2, opacity: 0 }}
          
         whileInView={{
           scale: 1, opacity:1,
           transition: {
             duration: 1,
             delay: 0.5,
           },
         }}
          src={apple}
          alt="apple_store"
          className={`cursor-pointer w-[128px] h-[42px] object-contain`}
        />
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          
          whileInView={{
            scale: 1, opacity:1,
            transition: {
              duration: 1,
              delay: 0.7,
            },
          }}
          src={google}
          alt="google_store"
          className={`cursor-pointer w-[128px] h-[42px] object-contain`}
        />
      </motion.div>
    </div>
  </section>
);

export default Billing;
