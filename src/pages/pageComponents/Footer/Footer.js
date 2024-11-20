import { useState } from "react";
import style from "./styles.module.css";
import Logo from "../../../components/Logo/Logo/Logo";
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.Title}>
        <Logo/>
      </div>
    </div>
  );
};

export default Footer;
