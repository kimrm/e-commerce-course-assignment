import styled from "styled-components";

export const ProductTagSelect = styled.div`
  display: flex;
  background-color: #444;
  margin-block-end: 2rem;
  label {
    display: block;
    margin-block-end: 0.5rem;
    font-weight: bold;
  }
  select {
    background-color: #333;
    border: none;
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    option {
      color: #333;
      background-color: #444;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ProductTags = styled.div`
  display: none;
  margin-block-end: 2rem;
  @media (min-width: 768px) {
    display: block;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      flex: 0 0 auto;
      background-color: #333;
      border-radius: 5px;
      &:hover {
        background-color: #444;
      }
      &.active {
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
