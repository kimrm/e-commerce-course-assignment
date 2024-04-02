import styled from "styled-components";

export const PriceStyle = styled.span`
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
  &::before {
    content: "$";
  }
`;

export const DiscountStyle = styled.span`
  color: green;
  background-color: #222;
  padding: 0.2rem;
  border-radius: 5px;
  margin-inline-start: 0.5rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  &::before {
    content: "-";
  }
`;
