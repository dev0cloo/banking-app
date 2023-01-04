import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} flex-col ${styles.paddingY}`}
  >
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className={`flex-col flex-1 justify-start mr-10`}>
        <img
          src={logo}
          alt="Hoobank"
          className={`w-[266px] h-[72px] object-contain`}
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.key}
            className="flex flex-col gap-2 ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerlink.title}</h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer text-dimWhite ${index !== index.length -1 ? "mb-4": "mb-0" }`}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className={`flex justify-between w-full md:flex-row flex-col pt-6 items-center border-t-[1px] border-t-[#3F3E45]`}>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      2021 HooBank. All Rights Reserved.
      </p>
      <div className={`flex flex-row gap-4 md:mt-0 mt-6`}>
        {socialMedia.map((socials) => (
          <a href={socials.link}><img src={socials.icon} alt={socials.id} className={`w-[21px] h-[21px] cursor-pointer object-contain`}/></a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
