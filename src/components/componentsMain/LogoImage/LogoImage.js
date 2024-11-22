import logo from "../../../media/icons/ravencoin.png";
import style from "./styles.module.css";

const LogoImage = () => {
  return (
    <div className={style.BackgroundLogo}>
      <img className={style.Logo + " invert"} src={logo} alt=""></img>
    </div>
  );
};

export default LogoImage;
