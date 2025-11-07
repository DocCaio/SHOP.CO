import styles from "./TopSelling.module.css";

import cardsData from "../../Data/TopSelling.json";

import type { Card } from "../../Types/card";
import type React from "react";

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Assuming USD based on your previous input
    minimumFractionDigits: 0,
  }).format(price);
};

const TopSelling: React.FC = () => {
  return (
    <section className={styles.container}>

       <h2>Top Selling</h2>

      <div className={styles.cards}>
        {cardsData.map((card: Card) => (
          <div key={card.id} className={styles.card}>
            <img
            src={card.image}
            alt={card.name}
            className={styles.image}            
            />
            <h3>{card.name}</h3>
            <span>
              {formatPrice(card.price)}
            </span>
          </div>

        ))}

      </div>

    </section>
  )
}
export default TopSelling;