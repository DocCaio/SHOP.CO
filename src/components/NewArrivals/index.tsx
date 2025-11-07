import styles from "./NewArrivals.module.css";
import cardsData from "../../Data/NewArrivals.json";
import type React from "react";

import type { Card } from "../../Types/card";




const NewArrivals: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>New Arrivals</h2>

      <div className={styles.cards}>
        {cardsData.map((card: Card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={card.image}
              alt={card.name}
              className={styles.image}
            />
            <h3>{card.name}</h3>
            <span>{card.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
