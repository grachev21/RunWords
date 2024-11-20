import style from "./styles.module.css";
import { useEffect, useRef, useState, createRef } from "react";
import BarChartWords from "../../../components/BarChartWords/BarChartWords";
import week from "../../../helpers/Week";
import month from "../../../helpers/Month";
import year from "../../../helpers/Year";
import PieChartWords from "../../../components/BarChartWords/PieChart";

const Graphic = () => {
  const [isItem, setItem] = useState(0);
  const ItemList = ["Неделя", "Месяц", "Год", "Всё"];
  return (
    <div className={style.Graphic}>
      <div className={style.BlockManagement}>
        {ItemList.map((ItemList, index) => {
          return (
            <p
              key={index}
              className={index === isItem ? style.ItemsActive : style.Items}
              onClick={() => setItem(index)}>
              {ItemList}
            </p>
          );
        })}
      </div>
      <div className={style.BlockGraphic}>
        <div className={isItem === 0 ? style.ItemGraphicActive : style.ItemGraphic}>
          <BarChartWords data={week} />
        </div>
        <div className={isItem === 1 ? style.ItemGraphicActive : style.ItemGraphic}>
          <BarChartWords data={month} />
        </div>
        <div className={isItem === 2 ? style.ItemGraphicActive : style.ItemGraphic}>
          <BarChartWords data={year} />
        </div>
        <div className={isItem === 3 ? style.ItemGraphicActive : style.ItemGraphic}>
          <PieChartWords />
        </div>
      </div>
    </div>
  );
};
export default Graphic;
