import { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdNightlight } from "react-icons/md";

const ButtonTheme = () => {
  const [isTheme, setTheme] = useState("dark");

  const switchDayNight = () => {
    setTheme((e) => {
      return e == "light" ? "dark" : "light";
    });
  };

  return <>{isTheme === "dark" ? <WiDaySunny color="#ffe100" size={"28px"} /> : <MdNightlight color="#ffe100" size={"28px"} />}</>;
};
export default ButtonTheme;
