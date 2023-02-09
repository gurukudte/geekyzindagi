import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  *{
    
    font-family: Open-Sans, 'Roboto', Sans-Serif;
    box-sizing:border-box;

  }
  body {
    margin:0;
    padding:0;
    height: 100vh;
    background-color: #eee;
  }
`;

export default GlobalCSS;
