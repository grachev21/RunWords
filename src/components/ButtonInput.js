import styled from "styled-components";

const Input = styled.input`
  width: 288px;
  background-color: var(--button-background);
  border: none;
  color: var(--text);
  padding-top: 10px;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonInput = ({ title }) => {
  return (
    <Input>
      <input type="submit" value={title} />
    </Input>
  );
};
export default ButtonInput;
