import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    font-family: 'Roboto', Arial,Helvetica,sans-serif;
    font-size: 14px;
    line-height: 1.5
  }
  div {
    display: block;
    }
  }
`;

export default GlobalStyle;
