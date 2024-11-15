import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu_list } from "../../../helpers/ButtonMenuLIst";

import style from "./SidePanel.module.css";

import ButtonTheme from "../../../components/ButtonTheme/ButtonTheme";
import LogoImage from "../../../components/Logo/LogoImage/LogoImage";

const SidePanel = () => {
  const [showText, setShowText] = useState("-160px");
  console.log(showText);

  return (
    <div className={style.Panel}>
      <LogoImage />
      <div className={style.PanelButton}>
        {menu_list.map((menu_list, index) => {
          return (
            <NavLink key={index} to={menu_list.link}>
              <p className={style.InfoSlider}>{menu_list.title}</p>
              <img
                className={style.Icon + " invert"}
                onMouseEnter={() => {
                  setShowText("70px");
                }}
                onMouseLeave={() => {
                  setShowText("-160px");
                }}
                src={menu_list.img}></img>
            </NavLink>
          );
        })}
      </div>
      <div className={style.Theme}>
        <div className={style.Button}>
          <ButtonTheme />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
