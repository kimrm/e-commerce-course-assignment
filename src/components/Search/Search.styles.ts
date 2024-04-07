import styled from "styled-components";
import { colors } from "../../config/theme";

export const SearchContainer = styled.div`
  display: block;
  position: relative;
  overflow: visible;
  transition: width 0.3s;
  item-align: center;
  justify-content: center;
  background-color: ${colors.gray};
  border-radius: 0.5rem;
  svg {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 35%;
    left: 1rem;
    @media (max-width: 768px) {
      margin: auto;
    }
  }
  input {
    background-color: ${colors.gray};
    color: white;
    padding: 0.7rem;
    padding-inline-start: 3rem;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
      background-color: ${colors.darkGray};
    }
    @media (max-width: 768px) {
      &::placeholder {
        color: transparent;
      }
    }
  }
  &.expanded {
    display: block;
    position: relative;
    z-index: 100;
    @media (max-width: 768px) {
      position: absolute;
      width: 95%;
      margin-inline: auto;
      top: 31px;
      left: 0;
      right: 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: 50px;
  }
`;

export const SearchResultsContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 6rem;
  left: 0;
`;

export const SearchResult = styled.div`
  z-index: 100;
  background-color: ${colors.gray};
  padding: 1rem;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 0.5rem;
  margin-inline: auto;
  max-width: 1080px;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 1rem;
    & button {
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: 15px;
      align-items: center;
      cursor: pointer;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      padding: 0.5rem 1rem;
      &:hover {
        background-color: ${colors.darkGray};
      }
      svg {
        width: 1.2rem;
        height: 1.5rem;
      }
    }
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
