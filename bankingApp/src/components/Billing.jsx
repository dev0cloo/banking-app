import React from "react";
import { bill, apple, google } from "../assets";
import { layout } from "../style";
import styles from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} gap-6`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="bills"
        className={`w-[100%] h-[100%] relative z-[5]`}
      />
      <div className="absolute z-[3] -left-1/2 top-0 h-[50%] w-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 h-[50%] w-[50%] rounded-full pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} `}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With our online banking platform, you can easily view and manage your
        billing and invoices at any time. You can view the details of each
        invoice, download a copy for your records, and even make payments
        directly from the platform. With these tools at your fingertips, you can
        stay on top of your billing and keep your finances organized with ease.
      </p>
      <div
        className={`flex flex-row gap-5 flex-wrap sm:mt-10 mt-6 items-center`}
      >
        <img
          src={apple}
          alt="apple_store"
          className={`cursor-pointer w-[128px] h-[42px] object-contain`}
        />
        <img
          src={google}
          alt="google_store"
          className={`cursor-pointer w-[128px] h-[42px] object-contain`}
        />
      </div>
    </div>
  </section>
);

export default Billing;
