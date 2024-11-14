import styled from "styled-components";
import logo from "../../media/icons/ravencoin.png";

const BackgroundLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const LogoImage = () => {
  return (
    <BackgroundLogo>
      <Logo src={logo} alt=""></Logo>
    </BackgroundLogo>
  );
};

export default LogoImage;
