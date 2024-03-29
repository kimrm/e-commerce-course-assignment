import styled from "styled-components";

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
  padding: 2rem;
  background-color: #444;
  border-radius: 5px;
`;

export const ReviewsContainer = styled.div`
  margin-block-start: 2rem;
`;

export const ProductTags = styled.div`
  margin-block-end: 2rem;
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      background-color: #333;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
  }
`;
