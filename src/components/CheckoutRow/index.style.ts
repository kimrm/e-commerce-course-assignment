import styled from "styled-components";
import { colors } from "../../config/theme";

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr 1fr auto;
  grid-template-areas: "image name quantity price remove";
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 1rem;
  border-radius: 15;
  margin: 1rem 0;
  #image {
    grid-area: image;
  }
  #name {
    grid-area: name;
    font-size: 1rem;
    font-weight: bold;
  }
  #quantity {
    grid-area: quantity;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.8rem;
    color: #aaa;
    font-weight: normal;
    input {
      max-width: 50px;
      border: none;
      background-color: #333;
      padding: 0.5rem;
      border-radius: 5px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 1rem;
    }
  }
  #price {
    grid-area: price;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    #lineTotal {
      font-size: 0.8rem;
      color: #aaa;
      font-weight: normal;
    }
  }
  #remove {
    grid-area: remove;
    display: inline-block;
    width: fit-content;
    background: #444;
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #000;
      color: ${colors.button.danger};
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 300px;
    max-height: 300px;
    border-radius: 15px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    grid-template-areas:
      "name name name"
      "image image image"
      "price quantity ."
      "remove remove remove";
    grid-template-columns: 1fr 1fr 1fr;
    #name {
      font-size: 1.5rem;
    }
  }
`;
