import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #111;
  color: #ccc;
  border-radius: 15px;
  padding: 1rem;
  width: 270px;
  @media (max-width: 600px) {
    flex-basis: 100%;
  }
  img {
    max-height: 200px;
    min-height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .discount {
    color: green;
    background-color: #222;
    padding: 0.2rem;
    border-radius: 5px;
    &::before {
      content: "Sale: ";
    }
  }
`;

const CardLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export { Card, CardLink };
