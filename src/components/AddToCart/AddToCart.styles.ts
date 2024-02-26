import { styled } from "styled-components";

const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AddToCartButton = styled.button`
  background-color: #111;
  color: #ccc;
  border: #444 solid 1px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #222;
  }
`;

const AddToCartInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 50px;
`;

export { AddToCartButton, AddToCartInput, AddToCartContainer };
