import { features } from "../constants";
import Button from "./Button";
import styles, { layout } from "../style";
import { normalText, card } from "./Variants";
import { motion } from "framer-motion";

{
  /* create FeatureCard component to render feature mappings */
}
const FeatureCard = ({ icon, title, content }) => (
  <motion.div variants={card} initial="hidden" whileInView="visible" className={`flex flex-row p-6 rounded-[20px] gap-6 feature-card`}>
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>
    <div className={`flex-1 flex flex-col ml-3`}>
      <h4
        className={`font-poppins text-white text-[18px] font-semibold leading-[23px] mb-1`}
      >
        {title}
      </h4>

      <p
        className={`${styles.paragraph}font-poppins text-dimWhite text-[16px] font-normal leading-[24px] mb-1`}
      >
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      {/* controls the left side of the business component */}
      <div className={layout.sectionInfo}>
        <motion.h2 variants={normalText} initial="hidden" whileInView="header" className={`${styles.heading2} mt-5`}>
          You do the business, <br className="sm:block hidden" /> We'll handle
          the money.
        </motion.h2>
        <motion.p variants={normalText} initial="hidden" whileInView="header"  className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </motion.p>
        <Button styles="mt-10" />
      </div>
      {/* controls the right side of the business component */}
      <div className={`${layout.sectionImg} flex-col`}>
        {/* maps each feature  */}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
