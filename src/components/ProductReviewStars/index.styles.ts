import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Star = styled.svg<{
  isWithinRating?: boolean;
  fillGrade?: string;
  strokeWidth?: number;
  stroke?: string;
  viewBox?: string;
  xmlns?: string;
}>`
  height: 20px;
  width: 20px;
  color: yellow;
  fill: ${(props) => (props.isWithinRating ? "yellow" : "none")};
  fill-opacity: ${(props) => props.fillGrade};
`;
