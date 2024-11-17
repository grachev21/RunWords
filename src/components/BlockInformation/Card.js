import style from "./styles.module.css";
const Card = ({ title, info }) => {
  return (
    <div className={style.Card}>
      <h1 className={style.Title}>{title}</h1>
      <p className={style.Info}>{info}</p>
    </div>
  );
};
export default Card;
