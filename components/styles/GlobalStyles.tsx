import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald&display=swap');
html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    background-image: radial-gradient(circle at top, #fff, grey);
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    background-attachment: fixed;
    font-family: 'Open Sans', Lato,Arial,Helvetica,sans-serif;
    font-size: 14px;
    line-height: 1.5
  }
`;

export default GlobalStyle;
