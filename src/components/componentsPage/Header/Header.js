import { NavLink } from "react-router-dom";
import Logo from "../../componentsMain/Logo/Logo";
import SettingsBox from "../../componentsMain/SettingsBlock/SettingsBlock";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-center w-full h-20 backdrop-blur-md bg-color_three/30 z-10">
      <div className="flex items-center justify-between w-full mr-20 ml-20">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </div>
    </div>
  );
};
export default Nav;
