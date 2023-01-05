import styles from "../style";
import { motion } from "framer-motion";
import { textChild, button ,normalText} from "./Variants";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px] items-center`}>
      <div className={`flex flex-1 flex-col` } >
        <motion.h2 variants={textChild} initial="hidden" whileInView="visible" className={`${styles.heading2} text-White` }>Let’s try our service now!</motion.h2>
        <motion.p variants={normalText} initial="para1" whileInView="para" className={`${styles.paragraph} text-dimWhite max-w-[450px] mt-5` }>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </motion.p>
      </div>
      <motion.div initial="hidden"
          whileInView={{
            opacity: [0, 0.5, 1],
            y: [0, 15, 0],
            transition: {
              duration: 1,
              times: [0, 0.5, 1],
              delay: 1,
            },
          }}
          whileHover="hov"
          variants={button}
          whileTap="click"
        >
        <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}/>
      </motion.div>
    </section>
  );
};

export default CTA;
