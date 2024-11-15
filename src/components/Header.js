import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo/Logo/Logo";
import SettingsBox from "./SettingsBlock";

const Header = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
`;
const BlockMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
`;
const Line = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 1px;
  bottom: 0px;
  opacity: 10%;
`;

const Nav = () => {
  return (
    <Header>
      <BlockMenuHeader>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SettingsBox />
      </BlockMenuHeader>
      <Line />
    </Header>
  );
};
export default Nav;
