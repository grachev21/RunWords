import style from "./styles.module.css";

const ModelWindow = ({ active, setActive }) => {
  return (
    <div className={active ? style.activeModal: style.Modal} onClick={() => setActive(false)}>
      <div
        className={style.ModalContainer}
        onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
};
export default ModelWindow;
