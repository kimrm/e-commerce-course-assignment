import { styled } from "styled-components";

export const ShoppingBagItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #000;
  align-items: center;
  input {
    width: 3rem;
    background-color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;