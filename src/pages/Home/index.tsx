import React from 'react';
//import { useTheme } from "../../ThemeContext";
import {Container, Input, Button} from './styles';
// import { Container } from './styles';'

export default function Home() {
  // const themeToggle = useTheme();
  return (
    <>
    <header>
   {/* <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button>  */} 
    <picture>
      <img src="" alt="Logo?!"/>
    </picture>
    </header>
    <Container>
    <h1>Login </h1>
    <form> 
    <label htmlFor="email">Email</label>
    <Input type="email" id="email"/>
    <label htmlFor="senha">Senha</label>
    <Input type="password" id="senha"/>
    <Button>Acessar</Button>
    </form>

    <div className="botoes">
    <a href="#logado">Acessar como convidado</a>
    <a href="#conteudo">Verificar status</a>

    </div>
    
    </Container>
    </>
  );
}