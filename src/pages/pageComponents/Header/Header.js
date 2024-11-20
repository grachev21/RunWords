import { NavLink } from "react-router-dom";
import Logo from "../../../components/Logo/Logo/Logo";
import SettingsBox from "../../../components/SettingsBlock/SettingsBlock";
import style from "./styles.module.css";

const Nav = () => {
  return (
    <div className={style.Header}>
      <div className={style.BlockMenuHeader + " limiter"}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </div>
      <div className={style.line}></div>
    </div>
  );
};
export default Nav;
