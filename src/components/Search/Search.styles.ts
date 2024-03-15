import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 300px;
  input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
  }
`;

export const SearchResultsContainer = styled.div`
  overflow: hidden;
`;

export const SearchResult = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #444;
  padding: 1rem;
  height: 80vh;
  overflow-y: auto;
  min-width: 400px;
  max-width: 100%;
  border-radius: 0.5rem;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
