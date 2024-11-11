import styles from "./styles.module.css";

const ButtonInput = ({ title }) => {
  return <input className={styles.input} type="submit" value={title} />;
};
export default ButtonInput;
