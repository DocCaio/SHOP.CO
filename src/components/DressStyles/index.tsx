import styles from "./DressStyles.module.css";

import casual from "../../assets/DressStyles/casual.png";
import formal from "../../assets/DressStyles/formal.png";
import party from "../../assets/DressStyles/party.png";
import gym from "../../assets/DressStyles/gym.png";

const dressStyles = [
  { src: casual, label: "Casual", alt: "Casual clothing" },
  { src: formal, label: "Formal", alt: "Formal clothing" },
  { src: party, label: "Party", alt: "Party clothing" },
  { src: gym, label: "Gym", alt: "Gym clothing" },
];

const DressStyles: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Browse by Dress Style</h2>
      <div className={styles.grid}>
        {dressStyles.map((style) => (
          <div key={style.label} className={styles.card}>
            <img src={style.src} alt={style.alt} className={styles.image} />            
          </div>
        ))}
      </div>
    </section>
  );
};

export default DressStyles;
