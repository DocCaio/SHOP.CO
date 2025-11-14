import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Header/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <div className={styles.logoArea}>
            <Link to={"/"}>
              <img src={logo} alt="logo" className={styles.logo} />
            </Link>

            <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ""}`}>
              <li><Link to={"/"}>Shop</Link></li>
              <li><Link to={"/"}>On Sale</Link></li>
              <li><Link to={"/"}>New Arrivals</Link></li>
              <li><Link to={"/"}>Brands</Link></li>
            </ul>
          </div>

          <div className={styles.centerArea}>
            <div className={styles.search}>
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Search for product..." />
            </div>
          </div>

          <div className={styles.icons}>
            <Button />            
            <i className="bi bi-person-circle"></i>
            <button className={styles.hamburger} onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
