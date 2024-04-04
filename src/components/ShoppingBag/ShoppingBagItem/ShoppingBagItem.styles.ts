import { styled } from "styled-components";

export const ShoppingBagItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr auto;
  grid-template-areas: "image name price amount remove";
  gap: 1rem;
  align-items: center;
  & .image {
    grid-area: image;
    @media (max-width: 500px) {
      width: 100%;
      height: 100%;
    }
  }
  & .name {
    grid-area: name;
  }
  & .price {
    grid-area: price;
  }
  & .remove-button {
    grid-area: remove;
  }
  input {
    grid-area: amount;
    width: 3rem;
    background-color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "image name"
      "image price"
      "image amount"
      "image remove";
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
