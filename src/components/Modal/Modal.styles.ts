import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  &.primary {
    background-color: #007bff;
  }
  &.secondary {
    background-color: #6c757d;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  color: black;
  margin: auto;
`;
