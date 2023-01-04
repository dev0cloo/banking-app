import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import { text, textChild, normalText, button} from "./Variants";
// make animation smoother for header in hero section



const Hero = () => (
  <section id="home" className={"flex md:flex-row flex-col ${styles.paddingY}"}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* controls the discount aspect of the hero */}
      <motion.div initial="hidden" variants={normalText}
          whileInView="visible"
        className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
      >
        <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>
          Discount For <span className="text-white">1 Month </span>
          Account
        </p>
      </motion.div>
      {/* controls the header text of the hero section */}
      <div className="flex flex-row justify-between items-center w-full">
        <motion.h1 initial="hidden"
            whileInView= "visible" variants={text}
        className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <motion.span variants={textChild}
         className="text-gradient">GENERATION</motion.span>{" "}
        </motion.h1>
        {/* adds the Get started button */}
        <motion.div initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: [0,.5,1], y: [0,15,0],  transition:{
            duration: 1,
            times:[0,.5,1],
            delay: 2,
          }} }
          whileHover="hov" variants={button}
          whileTap="click"
         className="ss:flex hidden md:mr-4 mr 0">
          <GetStarted />
        </motion.div>
      </div>
      <motion.h1 initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
          }} className="font-poppins font-semibold ss:text[68px] text-[68px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </motion.h1>
      <motion.p initial="hidden"
          whileInView="visible"
          variants={normalText}
        className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </motion.p>
    </div>
    {/* controls the image in hero section */}
    <div
      className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <img
        src={robot}
        alt="robot arm"
        className={`w-[100%] h-[100%] relative z-[5]`}
      />
      {/* controls gradient behind image */}
      <div className="w-[40%] h-[35%] top-0 absolute z-[0] pink__gradient" />
      <div className="w-[80%] h-[80%] rounded-full bottom-40 absolute z-[1] white__gradient" />
      <div className="w-[50%] h-[50%] right-20 bottom-20 absolute z-[0] blue__gradient" />
      {/* puts a get started below the image in mobile view */}
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </div>
  </section>
);

export default Hero;
