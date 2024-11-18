import { NavLink } from "react-router-dom";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import { menu_list } from "../../helpers/ButtonMenuLIst";
import "./styles.css";
import month from "../../helpers/Month";
import week from "../../helpers/Week";
import BarChartWords from "../../components/BarChartWords/BarChartWords";
import BlockInformation from "./BlockInformation/BlockInformation";

export default function Home() {
  return (
    <div className="Home limiter">
      <BlockInformation />

<BarChartWords week={week}/>
<BarChartWords month={month}/>
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
