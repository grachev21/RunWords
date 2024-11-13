import { NavLink } from "react-router-dom";
import { menu_list } from "../../helpers/ButtonMenuLIst";
import ButtonTheme from "../ButtonTheme";
import LogoImage from "../Logo/LogoImage";
import styled from "styled-components";
import { useState } from "react";

const Panel = styled.div`
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${({theme}) => theme.colors.buttonDark};
`;
const PanelButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
const Icon = styled.img`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 20px;
`;

const ActiveLink = styled(NavLink)`
  opacity: 40%;
  &.active {
    opacity: 100%;
  }
`;
const Theme = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  bottom: 30px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.buttonDark};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const SidePanel = () => {
  return (
    <Panel>
      <LogoImage />
      <PanelButton>
        {menu_list.map((menu_list, index) => {
          return (
            <ActiveLink key={index} to={menu_list.link}>
              <Icon src={menu_list.img}></Icon>
            </ActiveLink>
          );
        })}
      </PanelButton>
      <Theme>
        <Button>
          <ButtonTheme />
        </Button>
      </Theme>
    </Panel>
  );
};

export default SidePanel;
