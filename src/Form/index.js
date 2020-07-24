import React, { useState } from "react";
import "./style.css";

const Form = ({ calculateResult }) => {
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
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset} className="form">
      <p>
        <label>
          <span className="form__labelText">Amount:</span>
          <input
            className="form__field form__field--bigger form__amount"
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
          <span className="form__labelText">From:</span>
          <select
            value={convertFrom}
            onChange={({ target }) => setConvertFrom(target.value)}
            className="form__field"
            required
          >
            <option>PLN</option>
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
            <option>CHF</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">To:</span>
          <select
            value={convertTo}
            onChange={({ target }) => setConvertTo(target.value)}
            className="form__field"
            required
          >
            <option>PLN</option>
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
            <option>CHF</option>
          </select>
        </label>
      </p>
      <div className="form__buttons">
        <p>
          <button className="form__button">Convert</button>
        </p>
        <p>
          <button className="form__button" type="reset">
            Reset
          </button>
        </p>
      </div>
    </form>
  );
};

export default Form;
