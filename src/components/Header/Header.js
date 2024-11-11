import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import SettingsBox from "../SettingsBlock/SettingsBlock";
import styles from "./styles.module.css";

const Nav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.block_menu_header + " limiter"}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
export default Nav;
