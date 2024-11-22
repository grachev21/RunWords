import { NavLink } from "react-router-dom";
import Logo from "../../componentsMain/Logo";
import SettingsBox from "../../componentsMain/SettingsBlock/SettingsBlock";
import style from "./styles.module.css";

const Nav = () => {
  return (
    <div className="flex justify-center fixed w-full h-14 backdrop-blur-md bg-color_eight/30 z-50">
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
