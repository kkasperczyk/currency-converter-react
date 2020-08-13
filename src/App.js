import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (convertFrom, convertTo, amount) => {
    let plnValue;
    let result;

    const rates = {
      eurRate: 4.4278,
      usdRate: 3.9058,
      gbpRate: 4.9384,
      chfRate: 4.1187,
    };

    const { eurRate, usdRate, gbpRate, chfRate } = rates;
    // eslint-disable-next-line default-case
    switch (convertFrom) {
      case "PLN":
        plnValue = +amount;
        break;
      case "EUR":
        plnValue = amount * eurRate;
        break;
      case "USD":
        plnValue = amount * usdRate;
        break;
      case "GBP":
        plnValue = amount * gbpRate;
        break;
      case "CHF":
        plnValue = amount * chfRate;
        break;
    }

    // eslint-disable-next-line default-case
    switch (convertTo) {
      case "PLN":
        result = plnValue;
        break;
      case "EUR":
        result = plnValue / eurRate;
        break;
      case "USD":
        result = plnValue / usdRate;
        break;
      case "GBP":
        result = plnValue / gbpRate;
        break;
      case "CHF":
        result = plnValue / chfRate;
        break;
    }

    setResult(`${result.toFixed(2)}`);
  };

  return (
    <Container>
      <Header title="currency converter" />
      <Main>
        <Clock />
        <Form calculateResult={calculateResult} setResult={setResult} />
        <Result result={result} />
      </Main>
      <Footer title="Copyright Konrad Kasperczyk 2020 All Rights Reserved" />
    </Container>
  );
}

export default App;
