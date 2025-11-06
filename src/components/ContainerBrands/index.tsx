import styles from "./ContainerBrands.module.css";

import CalvinKlein from "../../assets/Brands/CalvinKlein.png";
import Zara from "../../assets/Brands/Zara.png";
import Prada from "../../assets/Brands/Prada.png";
import Versace from "../../assets/Brands/Versace.png";
import Gucci from "../../assets/Brands/Gucci.png";

const ContainerBrands = () => {
    return (
        <div className={styles.container}>
            <img src={Versace} alt="Logo da marca Versace"/>
            <img src={Zara} alt="Logo da marca Zara" />
            <img src={Gucci} alt="Logo da marca Gucci"/>
            <img src={Prada} alt="Logo da marca Prada" />
            <img src={CalvinKlein} alt="Logo da marca Calvin Klein"/>

        </div>
    )
}

export default ContainerBrands;