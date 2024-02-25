import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  overflow: visible;
  input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
  }
`;

const SearchResultsContainer = styled.div`
  overflow: visible;
`;

export const SearchResult = styled.div`
  position: absolute;
  background-color: #444;
  padding: 1rem;
  min-width: 400px;
  max-width: 100%;
  border-radius: 0.5rem;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { SearchContainer, SearchResultsContainer };
