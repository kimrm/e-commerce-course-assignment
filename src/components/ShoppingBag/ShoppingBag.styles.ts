import { styled } from "styled-components";
import { colors } from "../../config/theme";

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
  margin: auto;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  .link {
    display: block;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    background-color: ${colors.button.primary};
    color: #222;
    border-radius: 15px;
    cursor: pointer;
    &:hover {
      background-color: ${colors.button.light};
    }
  }
  .total {
    text-align: right;
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    left: 0;
    width: 95vw;
  }
`;

export const ShoppingBagButton = styled.button`
  position: relative;
  display: flex;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  margin-inline-end: 1rem;
  & .count {
    position: absolute;
    top: -0.5rem;
    right: -1rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid ${colors.info};
    padding: 0.2em 0.5em;
    border-radius: 100%;
    color: ${colors.infoDark};
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
