import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
import SettingsBox from "./SettingsBlock/SettingsBlock";

const Header = {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  height: "60px",
  marginLeft: "60px",
};
const BlockMenuHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const Line = {
  position: "absolute",
  backgroundColor: "white",
  width: "100%",
  height: "1px",
  bottom: "0px",
  opacity: "10%",
};
const Nav = () => {
  return (
    <div style={Header}>
      <div style={BlockMenuHeader} className={"limiter"}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </div>
      <div style={Line}></div>
    </div>
  );
};
export default Nav;
