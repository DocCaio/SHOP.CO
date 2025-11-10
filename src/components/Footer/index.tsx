import styles from "./Footer.module.css";

import logo from "../../assets/Header/logo.png";

import visa from "../../assets/Footer/visa.png";
import master from "../../assets/Footer/master.png";
import paypal from "../../assets/Footer/paypal.png";
import apple from "../../assets/Footer/apple.png";
import google from "../../assets/Footer/google.png";

const list = [
  {
    h4: "Company",
    li: ["About", "Features", "Works", "Career"]
  },
  {
    h4: "Help",
    li: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
  },
  {
    h4: "FAQ",
    li: ["Account", "Manage Deliveries", "Orders", "Payments"]
  },
  {
    h4: "Resources",
    li: ["Free Ebooks", "Development Tutorial", "How-to Blog", "YouTube Playlist"]
  }
];

const payCards = [
  { src: visa, alt: "Visa card" },
  { src: master, alt: "MasterCard" },
  { src: paypal, alt: "PayPal" },
  { src: apple, alt: "Apple Pay" },
  { src: google, alt: "Google Pay" },
];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.about}>
        <img src={logo} alt="Shop.co logo" />
        <p>
          We have clothes that suit your style and which you’re proud to wear.
          From women to men.
        </p>

        <div className={styles.social}>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-threads-fill"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-github"></i>
        </div>
      </div>

      <div className={styles.links}>
        {list.map((section, index) => (
          <div key={index}>
            <h4>{section.h4}</h4>
            <ul>
              {section.li.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      

      <span className={styles.copy}>
        Shop.co © 2000–2025, All Rights Reserved
      </span>


      <div className={styles.payments}>
        {payCards.map((pay, index) => (
          <img key={index} src={pay.src} alt={pay.alt} />
        ))}
      </div>

      
    </footer>
  );
};

export default Footer;
