import { styled } from "styled-components";
import { colors } from "../../config/theme";

export const CartButton = styled.button`
  --count-background-color: transparent;
  --count-color: ${colors.warning};
  position: relative;
  display: flex;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  margin-inline-end: 1rem;
  &:hover {
    --count-background-color: ${colors.darkGray};
  }
  & .count {
    position: absolute;
    top: -1rem;
    right: -1.3rem;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0.2em 0.5em;
    border-radius: 100%;
    color: var(--count-color);
    background-color: var(--count-background-color);
    text-shadow: 0 0 1px #000;
  }
`;
