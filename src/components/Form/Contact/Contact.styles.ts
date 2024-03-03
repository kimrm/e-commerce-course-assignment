import { styled } from "styled-components";

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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
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
  color: red;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: #ffefec;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;
