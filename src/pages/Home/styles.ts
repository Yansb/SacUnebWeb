import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 400px;
  margin: 10% auto;
  height: auto;
  padding: 10px;
  background-color: white;
  
  .botoes{
    display: flex;
    justify-content: space-between;
  }

  h1{
    justify-self: center;
  }

  a{
    justify-self: center;
    text-decoration: none;
    color: #0404c3;
    font-size: 14px;
    margin-top: 10px;
    &:hover{
      color: orange;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  

`;


export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 4px;

`;