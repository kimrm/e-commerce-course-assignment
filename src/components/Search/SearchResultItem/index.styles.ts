import styled from "styled-components";
import { Link } from "react-router-dom";

export const Tag = styled.span`
  color: #aaa;
  font-weight: bold;
  padding: 2px;
`;

export const SearchResultItem = styled(Link)`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #aaa;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.2rem;
  }
`;

export const SearchResult = styled.li`
  background-color: #222;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;
