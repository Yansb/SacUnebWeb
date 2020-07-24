import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";


const GlobalStyle = createGlobalStyle`
  html{
    background-image: linear-gradient(#f0685a 0, #f0685a 100%),
    linear-gradient(#2c7fe6 0, #2c7fe6 100%);
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: left, right;
  }
  body{
    /*background-color: ${FuhthestBackground};*/
    color:${TextColor};
    -webkit-font-smoothing: antialiased;   
    .bg-login{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
      margin: 8% auto;
      header{
        line-height: 2;
        padding: 14px 0px;
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
