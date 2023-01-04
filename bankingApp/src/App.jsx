
import styles from "./style";
// imports components from index.js to save code repetition
import {
  Navbar,
  Hero,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* navbar classnames represent imported styles from ./style*/}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /></div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}><Hero /></div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
