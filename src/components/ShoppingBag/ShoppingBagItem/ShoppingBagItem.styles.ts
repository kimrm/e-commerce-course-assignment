import { styled } from "styled-components";

export const ShoppingBagItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  gap: 1rem;
  align-items: center;
  input {
    width: 3rem;
    background-color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;

export const Row = styled.div`
  padding: 1rem;
  border-radius: 5px;
  margin: 0.5rem 0;
  background-color: #222;
  &:hover {
    background-color: #222;
  }
`;

export const RemoveButton = styled.button`
  color: #fff;
  background-color: #444;
  border: none;
  margin-top: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  width: 2rem;
  height: 2rem;
  &:hover {
    background-color: #ccc;
    color: red;
  }
`;
