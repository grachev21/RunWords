import { useRef } from "react";
import styled from "styled-components";

const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: 10px;
  width: 100vh;
  border-radius: 10px;
  transition: 0.3s;
`;
const Cub = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid rgb(174, 173, 173);
  transition: 0.3s;
`;
const Line = styled.div`
  width: 50px;
  height: 1px;
  background-color: aliceblue;
  margin-left: 10px;
  opacity: 50%;
  transition: 0.8s;
`;
const Title = styled.p`
  text-align: end;
  color: var(--text);
  margin-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  cursor: pointer;
  opacity: 50%;
  transition: 0.3s;
`;

const ButtonMenu = ({ title }) => {
  const enter = () => {
    btn.current.classList.add("enter");
  };
  const lave = () => {
    btn.current.classList.remove("enter");
  };
  const btn = useRef(null);
  return (
    <Button ref={btn} onMouseEnter={enter} onMouseLeave={lave}>
      <Cub></Cub>
      <Line></Line>
      <Title>{title}</Title>
    </Button>
  );
};
export default ButtonMenu;
