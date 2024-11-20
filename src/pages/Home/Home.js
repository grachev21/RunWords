import "./styles.css";
import SettingsInformation from "./SettingsInformation/SettingsInformation";
import BlockInformation from "./BlockInformation/BlockInformation";
import Graphic from "./Graphic/Graphic";

export default function Home() {
  return (
    <div className="Home limiter">
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
