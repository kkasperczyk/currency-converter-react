import React, { useState } from "react";
import {
  StyledFormLabelText,
  StyledFormField,
  StyledFormFieldSelect,
  StyledFormButtonContainer,
  StyledFormButton,
} from "./styled";

const Form = ({ calculateResult, setResult }) => {
  const [amount, setAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("PLN");
  const [convertTo, setConvertTo] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(convertFrom, convertTo, amount);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount("");
    setConvertFrom("PLN");
    setConvertTo("EUR");
    setResult("");
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <p>
        <label>
          <StyledFormLabelText>Amount:</StyledFormLabelText>
          <StyledFormField
            type="number"
            name="amount"
            min="1"
            step="any"
            required
            autoFocus
            placeholder="Enter amount"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          <StyledFormLabelText>From:</StyledFormLabelText>
          <StyledFormFieldSelect
            value={convertFrom}
            onChange={({ target }) => setConvertFrom(target.value)}
            required
          >
            <option>PLN</option>
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
            <option>CHF</option>
          </StyledFormFieldSelect>
        </label>
      </p>
      <p>
        <label>
          <StyledFormLabelText>To:</StyledFormLabelText>
          <StyledFormFieldSelect
            value={convertTo}
            onChange={({ target }) => setConvertTo(target.value)}
            required
          >
            <option>PLN</option>
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
            <option>CHF</option>
          </StyledFormFieldSelect>
        </label>
      </p>
      <StyledFormButtonContainer>
        <p>
          <StyledFormButton>Convert</StyledFormButton>
        </p>
        <p>
          <StyledFormButton type="reset">Reset</StyledFormButton>
        </p>
      </StyledFormButtonContainer>
    </form>
  );
};

export default Form;
