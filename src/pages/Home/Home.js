import "./styles.css";
import SettingsInformation from "./SettingsInformation/SettingsInformation";
import BlockInformation from "./BlockInformation/BlockInformation";
import Graphic from "./Graphic/Graphic";
import Title from "../../components/componentsMain/Title/Title";
import Text from "../../components/componentsMain/Text/Text";

export default function Home() {
  return (
    <div className="Home limiter">
      <Title text={"RunWord - помощник в освоении и отработки слов"} />
      <Text
        text={
          "Здесь вы сможете создать словарь из любого текста, алгоритм удалит все повторяющиеся слова и сортируит их по алфавиту"
        }
      />

      <SettingsInformation />
      <BlockInformation />
      <Graphic />
      {/* <BarChartWords data={week}/> */}
      {/* <BarChartWords data={Month}/> */}

      {/* <BarChartWords /> */}
      {/* {menu_list.map((menu_list, index) => {
        return (
          <NavLink key={index} to={menu_list.link} className="link-menu">
            <ButtonMenu key={index} title={menu_list.title} img={menu_list.img} />
          </NavLink>
        );
      })} */}
    </div>
  );
}
