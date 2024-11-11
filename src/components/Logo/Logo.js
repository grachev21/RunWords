import styles from "./styles.module.css";
import logo from "../../img/icons/ravencoin.png";

const Logo = () => {
  return (
    <div className={styles.logo_block}>
      <img className={styles.logo} src={logo} />
      <div className={styles.logotext_1}>Run</div>
      <div className={styles.logotext_2}>Words</div>
    </div>
  );
};
export default Logo;
