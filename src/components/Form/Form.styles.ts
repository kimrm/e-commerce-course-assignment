import { styled } from "styled-components";
import { colors } from "../../config/theme";

export const FormGroup = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  input,
  textarea {
    font-size: 1rem;
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
  margin-block: 1rem;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
`;

export const ValidationLabel = styled.span`
  display: inline;
  width: fit-content;
  color: #222;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${colors.danger};
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;
