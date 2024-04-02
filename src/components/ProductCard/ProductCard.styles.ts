import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoReviews = styled.span`
  color: #444;
`;

export const Description = styled.div`
  p {
    color: #ccc;    
  }
  a {
    display: block;
    text-decoration-style: dotted;
    color: #ccc;
    &:hover {      
      color: #fff;
    
  }
`;

export const Reviews = styled.div`
  padding-block: 1rem;
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr auto;
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

export const CardLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;
