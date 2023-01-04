import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div
      className={`${styles.flexCenter} sm:gap-0 gap-2 w-full flex-wrap`}
    >
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1`}>
          {/* TODO change background color on hover */}
          <a href={client.link} className={`cursor-pointer`}>
          <img
            src={client.logo}
            alt={client.id}
            className={`sm:w-[192px] w-[100px] object-contain`}
          />

          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
