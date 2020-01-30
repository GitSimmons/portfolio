import { createGlobalStyle } from "styled-components";
// import KumarOneOutline from "../../public/fonts/KumarOneOutline-Regular.ttf";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline|Roboto&display=swap');
@font-face {
    font-family: 'Kumar One Outline';
    src: url('/fonts/Kumar_One_Outline/KumarOneOutline-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/Roboto-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    font-display: auto;

html {
    box-sizing: border-box;
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
    background-color: #fff;
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
