import logo from "../../../media/icons/ravencoin.png";

const LogoImage = () => {
  return (
    <div className="flex items-center justify-center w-16 h-16 cursor-pointer">
      <img className="w-10 h-10 object-cover invert" src={logo} alt=""></img>
    </div>
  );
};

export default LogoImage;
