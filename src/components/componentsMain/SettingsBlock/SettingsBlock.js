import style from "./styles.module.css";
import iconSettig from "./icons/icons8-settings-50.png";
import iconUser from "./icons/icons8-user-24.png";
import iconMessage from "./icons/icons8-message-50.png";
import menu from "./icons/icons8-menu-50.png";
import { useEffect, useState } from "react";

const SettingsBox = () => {
  const [isMenu, setMenu] = useState(-180);
  const [isWindowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    console.log(isWindowWidth);
  }, [isWindowWidth, setWindowWidth]);

  const slide = () => {
    if (isMenu === -180) {
      setMenu(70);
    } else {
      setMenu(-180);
    }
  };
  console.log(isMenu);
  const slideTop = {
    top: `${isMenu}px`,
    opacity: "isOpasity",
  };
  return (
    <div onClick={slide} className={style.Settings}>
      <img className={style.Menu + " invert"} src={menu} alt="" />
      <div className={style.Container} style={slideTop}>
        <img className={style.Item + " invert"} src={iconMessage} alt=""></img>
        <img className={style.Item + " invert"} src={iconUser} alt=""></img>
        <div className={style.BackgroundButton}>
          <img className={style.ItemSettings + " invert"} src={iconSettig} alt=""></img>
        </div>
      </div>
    </div>
  );
};
export default SettingsBox;
