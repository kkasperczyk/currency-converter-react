import React, { useState } from "react";
import { useRates } from "./useRates";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const { date, rates, isError } = useRates();
  const [result, setResult] = useState("");

  const calculateResult = (convertFrom, convertTo, amount) => {
    const result = (amount * rates[convertTo]) / rates[convertFrom];

    setResult(`${result.toFixed(2)}`);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header title="currency converter" />
        <Main>
          <Clock />
          {rates ? (
            <>
              <Form calculateResult={calculateResult} setResult={setResult} />
              <Result result={result} />
              <p>
                Currency exchange rates updated on: <strong>{date}</strong>.
              </p>
            </>
          ) : !isError ? (
            "Loading rates..."
          ) : (
            "Error, try again later"
          )}
        </Main>
        <Footer title="Copyright Konrad Kasperczyk 2020 All Rights Reserved" />
      </Container>
    </>
  );
}

export default App;
