import { stats } from "../constants";
import React from "react";
import styles from "../style";
import Counter  from "./Variants";

const Stats = () => (
  <section
    className={`flex-wrap ${styles.flexCenter} flex-row sm:mt-20 mt-6 justify-center`}
  >
    {/* maps each id to a value and a title */}
    {stats.map((stat) => (
      <div key={stat.id} className={`flex justify-start flex-row m-3 flex-1 gap-2 items-center `}>
        {/* animates number part only, text elements are separated from int by textBefore and textAfter */}
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white"><Counter from={0} to={stat.value} textBefore={stat.textBefore ? stat.textBefore : ""}
              textAfter={stat.textAfter}/>
        </h4>
        
        <p className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">{stat.title}</p>
      </div>
    ))}
  </section> 
);

export default Stats;
