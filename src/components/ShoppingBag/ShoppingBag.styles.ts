import { styled } from "styled-components";

interface ShoppingBagPopupProps {
  isVisible: boolean;
}

export const ShoppingBagContainer = styled.div`
  position: relative;
  scroll: auto;
  @media (max-width: 600px) {
    position: static;
  }
`;

export const ShoppingBagPopup = styled.div<ShoppingBagPopupProps>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  overflow: auto;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  width: 20rem;
  max-height: calc(
    100vh - 8rem
  ); /* Subtract padding from the viewport height */
  overflow-y: auto; /* Enable vertical scrolling */
  button {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    width: 100%;
    padding: 1rem 0;
    border: green 2px solid;
    background-color: #444;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    left: 0;
    width: 100vw;
  }
`;

export const ShoppingBagButton = styled.button`
  display: flex;
  color: white;
  padding: 1rem;
  background-color: #000;
  border-radius: 15%;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
`;
