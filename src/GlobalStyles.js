import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Lato", sans-serif;
    background-image: url("https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 10px;
  }
`;
