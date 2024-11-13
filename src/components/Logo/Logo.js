import styled from "styled-components";

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const LogoText1 = styled.div`
  color: ${({ theme }) => theme.colors.button};
  font-size: 22px;
  font-weight: 600;
  margin-left: 4px;
`;
const LogoText2 = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 500;
`;
const Logo = () => {
  return (
    <LogoBlock>
      <LogoText1>Run</LogoText1>
      <LogoText2>Word</LogoText2>
    </LogoBlock>
  );
};
export default Logo;
