import style from "./styles.module.css";
// import PropTypes from "prop-types"
const GradientAnimation = ({ children, title }) => {
  return <div className={style.GradientAnimation}>{children}</div>;
};
export default GradientAnimation;

// CanvasGradient.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.element),
//     PropTypes.element.isRequired
//   ]),
//   title: PropTypes.string.isRequired,
// }