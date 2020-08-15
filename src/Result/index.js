import React from "react";
import { StyledResultLabel, StyledResultField } from "./styled";

const Result = ({ result }) => (
  <p>
    <label>
      <StyledResultLabel>Result:</StyledResultLabel>
      <StyledResultField type="number" readOnly value={result} />
    </label>
  </p>
);

export default Result;
