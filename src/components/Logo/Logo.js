const LogoBlock = {
  display: "flex",
  alignITems: "center",
  marginLeft: "20px",
};
const LogoText1 = {
  color: "rgb(202, 149, 5)",
  fontSize: "22px",
  fontWeight: "600",
  marginLeft: "4px",
};
const LogoText2 = {
  color: "var(--text)",
  fontSize: "22px",
  fontWeight: "500",
};

const Logo = () => {
  return (
    <div style={LogoBlock}>
      <div style={LogoText1}>Run</div>
      <div style={LogoText2}>Words</div>
    </div>
  );
};
export default Logo;
