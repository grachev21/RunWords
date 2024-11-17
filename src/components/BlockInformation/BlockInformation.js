import style from "./styles.module.css";
import Card from "./Card";
const BlockInformation = () => {
  return (
    <div className={style.BlockInformation}>
      <Card title={"Выученные слова"} info={336} />
      <Card title={"Заучено сегодня"} info={336} />
      <Card title={"Выученные слова"} info={336} />
      <Card title={"Выученные слова"} info={336} />
    </div>
  );
};

export default BlockInformation;
