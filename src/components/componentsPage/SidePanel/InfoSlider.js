import style from "./styles.module.css";
import { useRef } from "react";

const InfoSlider = ({ text, img, onChange, button }) => {
  const handleChange = (event) => {
    onChange((event.target.value = true));
  };
  const show = () => {
    sideRef.current.classList.add(style.Show);
  };
  const hide = () => {
    sideRef.current.classList.remove(style.Show);
  };

  const sideRef = useRef(null);
  return button ? (
    <>
      <img
        onClick={handleChange}
        onMouseEnter={show}
        onMouseLeave={hide}
        className="w-5 h5 invert"
        src={img}></img>
      <p ref={sideRef} onMouseLeave={hide} className={style.InfoSlider}>
        {text}
      </p>
    </>
  ) : (
    <>
      <img onMouseEnter={show} onMouseLeave={hide} className="w-5 h5 invert" src={img}></img>
      <p ref={sideRef} onMouseLeave={hide} className={style.InfoSlider}>
        {text}
      </p>
    </>
  );
};

export default InfoSlider;
