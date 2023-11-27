import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <HeaderLogo />
      </header>
    </>
  );
};

export default Header;
