import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
      </div>

    <div className={styles.form}>
  <div className={styles.inputWrapper}>
    <i className="bi bi-envelope"></i>
    <input type="email" placeholder="Enter your email address" />
  </div>
  <button type="submit">Subscribe to Newsletter</button>
</div>

    </section>
  );
};

export default Newsletter;
