import { styled } from "styled-components";
import { colors } from "../../../config/theme";

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${colors.button.primary};
  color: #222;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: ${colors.button.light};
  }
`;

export const LabelField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const ValidationLabel = styled.span`
  color: #222;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${colors.warning};
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;
