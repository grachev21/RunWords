import style from "./style.module.css";
const SettingsInformation = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.flash}></div>Количество слов в день
      </div>
      <div className={style.info}>
        <div className={style.flash}></div>Количество повторов при написании
        слова
      </div>
      <div className={style.info}>
        <div className={style.flash}></div>Количество вариантов при выборе
        правильного слова
      </div>
      <div className={style.info}>
        <div className={style.flash}>Озвучка</div>
      </div>
      <div className={style.info}>
        <div className={style.flash}>Транскрипция</div>
      </div>
    </div>
  );
};
export default SettingsInformation;
