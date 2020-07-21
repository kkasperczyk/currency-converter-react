import React from "react";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <Container>
      <Header title="currency converter" />
      <Main>
        <form className="form js-form">
          <p>
            <label>
              <span className="form__labelText">Amount:</span>
              <input
                className="form__field form__field--bigger form__amount js-form__amount"
                type="number"
                name="amount"
                min="1"
                step="any"
                required
                autoFocus
                placeholder="Enter amount"
              />
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText">From:</span>
              <select className="form__field js-convertFrom" required>
                <option value="pln">PLN</option>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
                <option value="eur">EUR</option>
                <option value="chf">CHF</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText">To:</span>
              <select className="form__field js-convertTo" required>
                <option value="pln">PLN</option>
                <option value="usd" selected>
                  USD
                </option>
                <option value="gbp">GBP</option>
                <option value="eur">EUR</option>
                <option value="chf">CHF</option>
              </select>
            </label>
          </p>
          <div className="form__buttons">
            <p>
              <button className="form__button js-form__button">Convert</button>
            </p>
            <p>
              <button className="form__button" type="reset">
                Reset
              </button>
            </p>
          </div>
          <p className="form__resultParagraph">
            <label>
              <span className="form__labelText">Result:</span>
              <input
                className="form__field form__field--bigger js-convertedValue"
                type="number"
                readonly
              />
            </label>
          </p>
        </form>
      </Main>
      <Footer title="&copy Copyright Konrad Kasperczyk 2020 All Rights Reserved" />
    </Container>
  );
}

export default App;
