import style from "./styles.module.css";
import Card from "./Card";
const BlockInformation = () => {
  return (
    <div className={style.BlockInformation}>
      <div className={style.TitleInformation}>Информация о выших достижениях</div>
      <Card title={"Выученные слова"} info={436} />
      <Card title={"Заучено сегодня"} info={1336} />
      <Card title={"Выученные слова"} info={288} />
      <Card title={"Выученные слова"} info={36} />
    </div>
  );
};

export default BlockInformation;
