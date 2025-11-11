import { Link } from "react-router-dom";

import Ban from "../../assets/Banner/banner.png";
import Sells from "../../assets/Sells/sells.png";

import styles from './Banner.module.css';

const Banner = () => {
  return (
 <section className={styles.container}>
  <div className={styles.inner}>
    <div>
      <h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
      <p>
        Browse through our diverse range of meticulously
        crafted garments, designed to bring out your individuality
        and cater to your sense of style.
      </p>
      <Link to="/">Shop Now</Link>
      <img src={Sells} alt="sells numbers" /> 
    </div>

    <figure>
      <img src={Ban} alt="banner" /> 
    </figure>
  </div>
</section>
  );
};

export default Banner;
