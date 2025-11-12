import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputWrapper}>
          <i className="bi bi-envelope"></i>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            required 
          />
        </div>
        <button type="submit">Subscribe to Newsletter</button>
      </form>
    </section>
  );
};

export default Newsletter;
