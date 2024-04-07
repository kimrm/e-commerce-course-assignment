import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 2rem;
  img {
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .ProductInfo {
    background-color: #333;
    color: #ccc;
    border-radius: 5px;
    padding: 1rem;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin-block: 1rem;
      }
    }
  }
  h3 {
    margin-top: 2rem;
    color: #ccc;
    font-size: 0.9rem;
  }
`;

export const ReviewsContainer = styled.div`
  margin-block-start: 2rem;
`;

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
