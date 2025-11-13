import { Link } from "react-router-dom";
import error from "../../assets/Error/error.png";
import styles from "./Error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container} >      
      <img src={error} alt="error image"/>
      <Link to={"/"}>Back</Link>      
    </div>
  )
}

export default ErrorPage;