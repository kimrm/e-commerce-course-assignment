import { styled } from "styled-components";
import { colors } from "../../config/theme";

const AddToCartContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.5rem;
`;

const AddToCartButton = styled.button`
  background-color: ${colors.button.primary};
  color: #000;
  border: ${colors.gray} solid 1px;
  &:disabled {
    cursor: not-allowed;
  }
  height: 2.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${colors.button.light};
  }
`;

const AddToCartInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${colors.borderGray};
  width: 50px;
  font-size: 1rem;
`;

export { AddToCartButton, AddToCartInput, AddToCartContainer };
