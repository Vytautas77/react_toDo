import logo from "../images/Harris.png";
import styles from "./headerLogo.module.css";

const HeaderLogo = () => {
  return (
    <div>
      <img className={styles.harry} src={logo.src} alt="Harry Potter logo" />
    </div>
  );
};

export default HeaderLogo;
