import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [result, setResult] = useState("");

  const plnRates = {
    PLN: 1,
    EUR: 4.39,
    USD: 3.71,
    GBP: 4.85,
    CHF: 4.08,
  };

  const calculateResult = (convertFrom, convertTo, amount) => {
    const result = (amount * plnRates[convertFrom]) / plnRates[convertTo];

    setResult(`${result.toFixed(2)}`);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header title="currency converter" />
        <Main>
          <Clock />
          <Form calculateResult={calculateResult} setResult={setResult} />
          <Result result={result} />
        </Main>
        <Footer title="Copyright Konrad Kasperczyk 2020 All Rights Reserved" />
      </Container>
    </>
  );
}

export default App;
