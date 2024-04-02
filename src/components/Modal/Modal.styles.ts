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
    color: #000;
    border: #444 solid 1px;
    height: 2.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 15px;
    cursor: pointer;
    width: 100%;
    margin-block: 0.5rem;
    &.primary {
      background-color: #24b90c;
      &:hover {
        background-color: #4ae931;
      }
    }
    &.secondary {
      background-color: #6c757d;
      &:hover {
        background-color: #8c959d;
      }
    }
  }
`;
