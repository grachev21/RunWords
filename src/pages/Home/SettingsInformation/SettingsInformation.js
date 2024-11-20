import style from "./style.module.css";
const SettingsInformation = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.flash}></div>
        <div className={style.blockText}>
          <p className={style.title}>Количество слов за день</p>
          <p className={style.meaning}>20</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.flash}></div>
        <div className={style.blockText}>
          <p className={style.title}>Количество повторов при написании</p>
          <p className={style.meaning}>12</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.flash}></div>
        <div className={style.blockText}>
          <div className={style.blockText}></div>
          <p className={style.title}>Количество вариантов при угадывании</p>
          <p className={style.meaning}>8</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.flash}></div>
        <div className={style.blockText}>
          <p className={style.title}>Озвучка</p>
          <p className={style.meaning}>Выключена</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.flash}></div>
        <div className={style.blockText}>
          <p className={style.title}>Транскрипция</p>
          <p className={style.meaning}>Включена</p>
        </div>
      </div>
    </div>
  );
};
export default SettingsInformation;
