import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: #800020;
  color: white;
  border: none;
  width: 500px;
  height: 200px;
  padding: 20px 40px;
  font-size: 24px;
  margin: 0 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #ddd;
  margin: 10px 0;
`;

export const MainText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonText = styled.span`
  font-size: 20px;
  color: #ddd;
`;
