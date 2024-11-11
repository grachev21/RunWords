import { useRef } from "react";
import styles from "./styles.module.css";

const ButtonMenu = ({ title, img }) => {
  const enter = () => {
    console.log("enter");
    btn.current.classList.add("enter");
  };
  const lave = () => {
    console.log("enter");
    btn.current.classList.remove("enter");
  };
  const btn = useRef(null);
  return (
    <div ref={btn} className={styles.button_menu} onMouseEnter={enter} onMouseLeave={lave}>
      <div className={styles.cub}></div>
      <div className={styles.line}></div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
export default ButtonMenu;
