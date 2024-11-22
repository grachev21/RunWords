import style from "./styles.module.css";
import Counter from "../../../components/componentsMain/Counter/Counter";
const Card = ({ title, info }) => {
  return (
      <div className={style.Card}>
        <h1 className={style.Title}>{title}</h1>
        <Counter number={info} />
    </div>
  );
};
export default Card;
