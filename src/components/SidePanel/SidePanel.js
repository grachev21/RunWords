import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { menu_list } from "../../helpers/ButtonMenuLIst";
import ButtonTheme from "../ButtonTheme";

const SidePanel = () => {
  return (
    <div className={styles.SidePanel}>
      {menu_list.map((menu_list, index) => {
        return (
          <NavLink key={index} to={menu_list.link} className={({ isActive }) => (isActive ? styles.normal_link : styles.actim_link)}>
            <img className={styles.icon} src={menu_list.img} />
          </NavLink>
        );
      })}
      <div className={styles.theme}>
        <div className={styles.button}>
          <ButtonTheme />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
