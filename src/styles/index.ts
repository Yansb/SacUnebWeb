import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";


const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    -webkit-font-smoothing: antialiased;   
    .bg-login{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
      margin: 8% auto;
      header{
        img{
          width: 120px;
        }
      }
    }
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px; 
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

`;

export default GlobalStyle ;
