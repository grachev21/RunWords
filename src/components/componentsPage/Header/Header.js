import style from "./styles.module.css"
import { NavLink } from "react-router-dom";
import Logo from "../../componentsMain/Logo/Logo";
import SettingsBox from "../../componentsMain/SettingsBlock/SettingsBlock";

const Nav = () => {
  return (
    <div className={style.Header}>
      <div className={style.ContentHeader + " limiter"}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </div>
    </div>
  );
};
export default Nav;
