import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 400px;
  margin: 10% auto;
  height: auto;
  padding: 14px 10px;
  background-color: white;
  
  .botoes{
    display: flex;
    justify-content: space-between;
    a{
    text-decoration: none;
    color: #0404c3;
    font-size: 14px;
    margin-top: 10px;
    background-color: #545151;
    padding: 10px;
    transition: 0.5s filter;
    border-radius: 6px;
    &:hover{
      color: orange;
      filter: contrast(50%);
    }
  }
    
  }

  h1{
    justify-self: center;
    font-size: 42px;
    color: black;
    margin-bottom: 20px;
   
  }


`;

export const Button = styled.button`
  width: 100%;
  background-color: #a20808;
  padding: 8px;
  color: white;
  border: none;
  transition: 0.5s filter;
  &:hover{
    filter: brightness(75%);
  }
  

`;


export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 4px;

`;