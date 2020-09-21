import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const [plnRates, setPlnRates] = useState([]);

  useEffect(() => {
    const getRates = async () => {
      await axios
        .get("https://api.exchangeratesapi.io/latest?base=PLN")
        .then((response) => {
          setPlnRates(response.data.rates);
        })
        .catch(() => {
          console.error("Nie udało się pobrać kursów");
        });
    };
    getRates();
  }, []);

  const calculateResult = (convertFrom, convertTo, amount) => {
    const result = (amount * plnRates[convertTo]) / plnRates[convertFrom];

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
