import style from "./styles.module.css";

const ModelWindow = ({ active, setActive }) => {
  return (
    <div
      className={active ? style.activeModal : style.Modal}
      onClick={() => setActive(false)}>
      <div
        className={style.ModalContainer}
        onClick={(e) => e.stopPropagation()}>
        <form className={style.Form}>
          <label className={style.LabelTexarea} for="dict">
            Вставте текст в это поле
          </label>
          <textarea
            className={style.DictText}
            id="dict"
            cols="50"
            rows="6"
            type="text"></textarea>
          <div className={style.CheckBoxBlock}>
            <input
              className={style.CheckBox}
              id="cuttingWords"
              type="checkbox"
            />
            <label className={style.LabelCheckBox} for="cuttingWords">
              Не сохранять слова короче двуъ символов
            </label>
          </div>
          <div className={style.BlockButton}>
            <button className={style.ButtonCancel}>Отмена</button>
            <input
              className={style.Button}
              id="cuttingWords"
              type="submit"
              value="Создать"
            />
          </div>
        </form>
      </div>
      <div className={style.BlurBack}></div>
    </div>
  );
};
export default ModelWindow;
