import { NavLink } from "react-router-dom";
import Logo from "../componentsMain/Logo";
import SettingsBox from "../componentsMain/SettingsBlock/SettingsBlock";

const Nav = () => {
  return (
    <div className="flex justify-center fixed w-full h-14 backdrop-blur-md bg-color_eight/30 z-10">
      <div className="flex items-center justify-between w-full ml-32 mr-32">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </div>
    </div>
  );
};
export default Nav;
