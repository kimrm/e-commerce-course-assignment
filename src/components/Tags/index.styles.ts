import styled from "styled-components";

export const Container = styled.div`
  h2 {
    margin-block-start: 1rem;
  }
`;

export const ProductTagSelect = styled.div`
  position: relative;
  tab-index: 0;
  display: block;
  margin-block-start: 0.5rem;
  margin-block-end: 2rem;
  background-color: #333;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  @media (min-width: 768px) {
    display: none;
  }
  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: #ccc;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    background-color: #333;
    background-image: none;
    border: none;
    width: 100%;
    height: 100%;
    color: #ccc;
    font-size: 1rem;
    cursor: pointer;
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
        background-color: #000;
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
