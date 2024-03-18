import { styled } from "styled-components";

export const ShoppingBagContainer = styled.div`
  position: relative;
  scroll: auto;
  @media (max-width: 600px) {
    position: static;
  }
`;

export const ShoppingBagPopup = styled.div`
  overflow: auto;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  width: 30rem;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  .link {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    border: green 2px solid;
    background-color: #444;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
  }
  .total {
    text-align: right;
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    left: 0;
    width: 100vw;
  }
`;

export const ShoppingBagButton = styled.button`
  display: flex;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
