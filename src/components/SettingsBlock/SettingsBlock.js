import style from "./styles.module.css"
import iconSettig from "./icons/icons8-settings-50.png";
import iconUser from "./icons/icons8-user-24.png";
import iconMessage from "./icons/icons8-message-50.png";

const SettingsBox = () => {
  return (
    <div className={style.Settings}>
      <img className={style.Item + " invert"} src={iconMessage} alt=""></img>
      <img className={style.Item + " invert"} src={iconUser} alt=""></img>
      <div className={style.BackgroundButton}>
        <img className={style.Item + " no-invert"} src={iconSettig} alt=""></img>
      </div>
    </div>
  );
};
export default SettingsBox;
