import styled from "styled-components";

export const ProductTags = styled.div`
  margin-block-end: 2rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      background-color: #333;
      border-radius: 5px;
      &:hover {
        background-color: #444;
      }
      a {
        display: block;
        padding: 0.5rem 1rem;
        color: #ccc;
        text-decoration: none;
        text-transform: capitalize;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
