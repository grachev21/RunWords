import Card from "./Card";
const BlockInformation = () => {
  return (
    <main className="flex flex-col justify-between sm:w-full">
      <Card title={"Выученные слова"} info={436} />
      <Card title={"Заучено сегодня"} info={1336} />
      <Card title={"Выученные слова"} info={288} />
      <Card title={"Выученные слова"} info={36} />
    </main>
  );
};

export default BlockInformation;
