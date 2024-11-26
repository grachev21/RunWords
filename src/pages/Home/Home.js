import SettingsInformation from "./SettingsInformation/SettingsInformation";
import BlockInformation from "./BlockInformation/BlockInformation";
import Graphic from "./Graphic/Graphic";
import Title from "../../components/Title";
import Text from "../../components/Text";

export default function Home() {
  return (
    <main className="flex flex-col justify-center mt-28 ">
      <Title text={"RunWord - помощник в освоении и отработки слов"} />
      <Text
        text={
          "Здесь вы сможете создать словарь из любого текста, алгоритм удалит все повторяющиеся слова и сортируит их по алфавиту"
        }
      />
      <Title text={"Информация о настройках"} />
      <SettingsInformation />
      <Title text={"Информация о выших достижениях"} />
      <BlockInformation />
      <Title text={"Графики"} />
      <Graphic />
    </main>
  );
}
