import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { menu_list } from "../../../helpers/ButtonMenuLIst";

import style from "./SidePanel.module.css";

import ButtonTheme from "../../../components/ButtonTheme/ButtonTheme";
import LogoImage from "../../../components/Logo/LogoImage/LogoImage";
import InfoSlider from "./InfoSlider";

const SidePanel = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={style.Panel}>
      <LogoImage />
      <div className={style.PanelButton}>
        {menu_list.map((menu_list, index) => {
          return (
            <div key={index} className={style.Link}>
              <NavLink to={menu_list.link}>
                <InfoSlider
                  text={menu_list.title}
                  img={menu_list.img}
                  show={show}
                />
              </NavLink>
            </div>
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
