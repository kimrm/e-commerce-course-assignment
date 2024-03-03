import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  color: black;
  position: fixed;
  margin: auto;
`;
