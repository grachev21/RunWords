import styled from "styled-components";
import iconSettig from "../../img/icons/icons8-settings-50.png";
import iconUser from "../../img/icons/icons8-user-24.png";
import iconMessage from "../../img/icons/icons8-message-50.png";

const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 40px;
`;
const BackgroundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 50%;
`;
const Item = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  padding: 8px;
  cursor: pointer;
`;
const SettingsBox = () => {
  return (
    <Settings>
      <Item src={iconMessage} alt=""></Item>
      <Item src={iconUser} alt=""></Item>
      <BackgroundButton>
        <Item src={iconSettig} alt=""></Item>
      </BackgroundButton>
    </Settings>
  );
};
export default SettingsBox;
