import React from "react";
import { feedback } from "../constants";
import styles, { layout } from "../style";
import { quotes } from "../assets";

const FeatureCard = ({ content, name, title, img }) => (
  <div className={`flex ${styles.flexStart} flex-col gap-10 feature-card py-12 px-12 rounded-[9px]`}>
      <img src={quotes} alt="quote" className={``} />

    <div className="flex">
      <p className={`${styles.paragraph}`}>{content} </p>
    </div>
    <div className={`flex flex-row gap-4 items-center`}>
      <img src={img} alt="person"/>
      <div className={`flex flex-col`}>
        <h6 className={``}>{name}</h6>
        <p>{title}</p>
      </div>
    </div>
  </div>
);
const Testimonials = () => (
  <section className={`${layout.section} md:flex-col`}>
    <div className={`flex flex-row justify-between items-center`}>
      <h2 className={styles.heading2}>
        What people are
        <br className="sm:block hidden" /> saying about us
      </h2>
      <p className={styles.paragraph}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`flex flex-row gap-20  mt-20`}>
      {feedback.map((feed) => (
        <FeatureCard key={feed.id} {...feed} />
      ))}
    </div>
  </section>
);

export default Testimonials;
