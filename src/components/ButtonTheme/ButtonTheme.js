import { useState } from "react";
import style from "./styles.module.css";
import day from "./icons/day-mode.png";
import night from "./icons/crescent-moon.png";

const ButtonTheme = () => {
  const [isTheme, setTheme] = useState("dark");

  const switchDayNight = () => {
    setTheme((e) => {
      return e == "light" ? "dark" : "light";
    });
  };

  return <div className={style.backIcons}>{isTheme === "dark" ? <img className={style.icon + " no-invert"} src={day} alt=""></img> : <img className={style.icon} src={night} alt=""></img>}</div>;
};
export default ButtonTheme;
