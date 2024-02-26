import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: #111;
  color: #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  img {
    max-height: 200px;
    width: 100%;
    object-fit: cover;
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
