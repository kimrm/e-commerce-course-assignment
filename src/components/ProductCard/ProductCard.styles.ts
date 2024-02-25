import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  img {
    max-height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

export { Card };
