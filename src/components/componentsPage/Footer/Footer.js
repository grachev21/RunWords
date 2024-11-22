import style from "./styles.module.css";
import Logo from "../../componentsMain/Logo";
import LogoImg from "../../componentsMain/LogoImage/LogoImage";
import vk from "./icons/vk_black_logo_icon_147058.png";
import vb from "./icons/viber_black_logo_icon_147056.png";
import tg from "./icons/telegram_logo_icon_144811.png";
import em from "./icons/email_mail_4598.png";
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.Title}>
        <LogoImg />
        <Logo />
      </div>
      <div className={style.Icons}>
        <img src={vk} alt=""></img>
        <img src={vb} alt=""></img>
        <img src={tg} alt=""></img>
        <img src={em} alt=""></img>
      </div>
    </div>
  );
};

export default Footer;
