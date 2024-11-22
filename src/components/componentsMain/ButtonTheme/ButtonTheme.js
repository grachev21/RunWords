import { useEffect, useState } from "react";
import style from "./styles.module.css";
import day from "./icons/day-mode.png";
import night from "./icons/crescent-moon.png";

const ButtonTheme = () => {
  const [isTheme, setTheme] = useState("dark");

  useEffect(() => {
    if (isTheme === "dark") {
      document.querySelector("html").classList.remove("day");
      document.querySelector("html").classList.add("night");
    } else {
      document.querySelector("html").classList.remove("night");
      document.querySelector("html").classList.add("day");
    }
  });
  const switchDayNight = () => {
    setTheme((e) => {
      return e == "light" ? "dark" : "light";
    });
  };

  return (
    <div onClick={switchDayNight} className={style.backIcons}>
      {isTheme === "dark" ? (
        <img className={style.icon + " no-invert"} src={day} alt=""></img>
      ) : (
        <img className={style.icon} src={night} alt=""></img>
      )}
    </div>
  );
};
export default ButtonTheme;
