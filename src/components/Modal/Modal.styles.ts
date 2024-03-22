import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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
  z-index: 2;
  background-color: #222;
  outline: 0.1px solid #fff;
  color: white;
  padding: 2rem;
  border-radius: 5px;
  max-width: 90%;
  margin: auto;
  button {
    padding: 0.5rem 2rem;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin-inline-end: 1rem;
    margin-block-end: 1rem;
    &.primary {
      background-color: #007bff;
    }
    &.secondary {
      background-color: #6c757d;
    }
  }
`;
