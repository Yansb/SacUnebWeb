import React from 'react';
//import { useTheme } from "../../ThemeContext";
import {Container, Content} from './styles';
import {FiUser, FiArchive} from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
// import { Container } from './styles';'

const SignIn: React.FC = () => {
  // const themeToggle = useTheme();
  return (
    <div className="bg-login">
     
    <header>
    <a href="#home">
    <img src={logoImg} alt="Uneb - Universidade do estado da Bahia"/>
        </a>
   {/* <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button>  */} 
    <h1>Bem vindo!</h1>
    <h2>Faça seu login ao lado para continuar</h2>
    </header>
    <Container>
      <Content>
        
        <h1>Faça seu Login </h1>
        <form> 

          <input placeholder="E-mail" type="email" id="email"/>

          <input placeholder="Senha" type="password" id="senha"/>

          <button>Acessar</button>
          <a href="#senha">Esqueceu sua senha?</a>
        </form>

       

        <div className="botoes">
          <a href="#logado">
            <FiUser/> 
            Abertura de chamado
          </a>
          <a href="#conteudo">
            <FiArchive/>
            Verificar chamados
          </a>
        </div>
      </Content>
    
    </Container>
    </div>
  );
}

export default SignIn;