import style from "./styles.module.css"
import { useState } from "react";
import useInterval from "use-interval";
const Counter = ({ number }) => {
  const [isNumber, setNumber] = useState(0);
  useInterval(() => {
    if (isNumber >= number) {
      clearInterval();
    } else {
      setNumber(isNumber + 1);
    }
  }, 20);
  return (
    <div className={style.Number}>
      {isNumber}
    </div>
  );
};
export default Counter;
