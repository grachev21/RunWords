import styles from "./styles.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser, FaRegBell } from "react-icons/fa";
import ButtonTheme from "../ButtonTheme/ButtonTheme";

const SettingsBox = () => {
  return (
    <div className={styles.settings}>
      <FaRegBell className={styles.item} size={"20px"} color="white" />
      <FaRegUser className={styles.item} size={"20px"} color="white" />
      <IoSettingsOutline className={styles.item} size={"20px"} color="white" />
      <ButtonTheme />
    </div>
  );
};
export default SettingsBox;
