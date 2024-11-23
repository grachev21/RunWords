import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu_list } from "../../../helpers/ButtonMenuLIst";

import style from "./styles.module.css";

import ButtonTheme from "../../componentsMain/ButtonTheme/ButtonTheme";
import LogoImage from "../../componentsMain/LogoImage/LogoImage";
import InfoSlider from "./InfoSlider";
import ModalWindow from "../../componentsMain/ModalWindow/ModalWindow";

const SidePanel = () => {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
    if (value) {
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  };

  return (
    <div className="w-14 h-full fixed top-0 left-0 bg-color_two z-20">
      <LogoImage />
      <div className="w-full max-h-72 bg-slate-600">
        <div className={style.Link}>
          <NavLink to={menu_list[0].link}>
            <InfoSlider text={menu_list[0].title} img={menu_list[0].img} button={false} onChange={handleChange} />
          </NavLink>
        </div>
        <div className={style.Link}>
          <InfoSlider text={menu_list[1].title} img={menu_list[1].img} button={true} onChange={handleChange} />
        </div>
        <div className={style.Link}>
          <NavLink to={menu_list[2].link}>
            <InfoSlider text={menu_list[2].title} img={menu_list[2].img} button={false} onChange={handleChange} />
          </NavLink>
        </div>
        <div className={style.Link}>
          <NavLink to={menu_list[3].link}>
            <InfoSlider text={menu_list[3].title} img={menu_list[3].img} button={false} onChange={handleChange} />
          </NavLink>
        </div>
        <div className={style.Link}>
          <NavLink to={menu_list[4].link}>
            <InfoSlider text={menu_list[4].title} img={menu_list[4].img} button={false} onChange={handleChange} />
          </NavLink>
        </div>
        <div className={style.Link}>
          <InfoSlider text={menu_list[5].title} img={menu_list[5].img} onChange={handleChange} button={true} />
        </div>
      </div>
      <div className={style.Theme}>
        <div className={style.Button}>
          <ButtonTheme />
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default SidePanel;
