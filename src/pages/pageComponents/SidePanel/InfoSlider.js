import style from "./SidePanel.module.css";
import { useRef } from "react";

const InfoSlider = ({ text, img, onChange}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const show = () => {
    sideRef.current.classList.add(style.Show);
  };
  const hide = () => {
    sideRef.current.classList.remove(style.Show);
  };
  const sideRef = useRef(null);

  return (
    <>
      <img
        onClick={handleChange}
        onMouseEnter={show}
        onMouseLeave={hide}
        className={style.Icon + " invert"}
        src={img}></img>
      <p ref={sideRef} onMouseLeave={hide} className={style.InfoSlider}>
        {text}
      </p>
    </>
  );
};

export default InfoSlider;
