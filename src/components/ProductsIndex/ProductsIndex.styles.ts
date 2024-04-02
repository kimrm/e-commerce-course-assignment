import styled from "styled-components";

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  background-color: #24b90c;
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
  .primary {
    background-color: #24b90c;
  }
  &:hover {
    background-color: #4ae931;
  }
`;
