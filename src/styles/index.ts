import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";


const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle ;
