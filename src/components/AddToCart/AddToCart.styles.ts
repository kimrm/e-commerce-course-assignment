import { styled } from "styled-components";

const AddToCartContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.5rem;
`;

const AddToCartButton = styled.button`
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
  &:hover {
    background-color: #4ae931;
  }
`;

const AddToCartInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 50px;
`;

export { AddToCartButton, AddToCartInput, AddToCartContainer };
