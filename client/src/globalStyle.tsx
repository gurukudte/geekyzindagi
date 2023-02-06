import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  margin: 0;
    padding: 0;
}
  *{
    
    font-family: Open-Sans, 'Roboto', Sans-Serif;
    box-sizing:border-box;

  }
  body {
    margin:0;
    padding:0;
  }
`;

export default GlobalStyle;
export {};
