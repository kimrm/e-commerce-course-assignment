import styled from "styled-components";

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
    background-color: #333;
    border-radius: 5px;
    align-items: center;
    padding: 0.5rem;
    input {
      max-width: 50px;
      border: none;
      background-color: #333;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 1rem;
    }
  }
  #price {
    grid-area: price;
  }
  #remove {
    grid-area: remove;
  }
  img {
    width: 100%;
    height: 100%;
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

// display: "grid";
//   gap: "1rem";
//   gridtemplatecolumns: "1fr 2fr 1fr 1fr auto";
//   justifycontent: "space-between";
//   alignitems: "center";
//   backgroundcolor: #222;
//   padding: "1rem";
//   borderradius: 15;
//   margin: "1rem 0";
