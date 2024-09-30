import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #800020;
`;

export const ModalBody = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#800020" : "#ccc")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#c50233" : "#aaa")};
  }
`;

