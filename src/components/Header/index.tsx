import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Header/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoArea}>
          <img src={logo} alt="logo" />
          <button className={styles.hamburger} onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>

        <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ""}`}>
          <li><Link to={"/"}>Shop</Link></li>
          <li><Link to={"/"}>On Sale</Link></li>
          <li><Link to={"/"}>New Arrivals</Link></li>
          <li><Link to={"/"}>Brands</Link></li>
        </ul>

        <div className={styles.search}>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="search for product..." />
        </div>

        <div className={styles.icons}>
          <i className="bi bi-cart2"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
