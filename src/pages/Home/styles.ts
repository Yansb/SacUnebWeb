import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  display: grid;
  width: 400px;
  height: auto;
  padding: 14px 10px;
  background-color: #575263;
  border-radius: 2%;
  
  .botoes{
    display: flex;
    justify-content: space-between;    
  }

  h1{
    justify-self: center;
    font-size: 42px;
    color: #f4ede8;
    margin-bottom: 20px;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form{
    margin: 60px 0;
    width: 340px;
    text-align: center;
    display: grid;
    a{
      text-align: center;
      justify-self: center;
      font-size: 12px;
      margin: 4px 0px;
    }
  }

  input{
    background: #575263;
    padding: 16px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #232129;

    &::placeholder{
      color: #3a3939;
    }

    &+input{
      margin-top: 8px;
    }
  }
  
  button{
    background: #2c7fe6;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #f4ede8;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#2c7fe6')}
    }
  }

  a{
      text-decoration: none;
      color: #f4ede8;
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 10px;
      transition: color 0.5s filter;
      border-radius: 10px;

      svg{
        margin-right: 8px;
      }
      &:hover{
        color: #ff9000;
      }
    }
`;