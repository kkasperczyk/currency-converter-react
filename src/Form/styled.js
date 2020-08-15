import styled from "styled-components";

export const StyledFormLabelText = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 80px;
  margin-right: 5px;
  color: #444;
  font-weight: bold;
`;

export const StyledFormField = styled.input`
  border: 2px solid #ccc;
  padding: 10px;
  width: 100%;
  max-width: 80px;
  border-radius: 20px;
  max-width: 140px;
`;

export const StyledFormFieldSelect = styled.select`
  border: 2px solid #ccc;
  padding: 10px;
  width: 100%;
  max-width: 80px;
  border-radius: 20px;
`;

export const StyledFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFormButton = styled.button`
  margin: 0 10px;
  background-color: hsl(240, 100%, 50%);
  color: white;
  padding: 10px 20px;
  text-transform: lowercase;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.7px;
  border: 2px solid transparent;
  border-radius: 20px;

  &:hover {
    background-color: white;
    color: hsl(240, 100%, 50%);
    border: 2px solid hsl(240, 100%, 50%);
    cursor: pointer;
  }
`;
