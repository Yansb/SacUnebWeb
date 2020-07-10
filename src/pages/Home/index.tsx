import React from 'react';
//import { useTheme } from "../../ThemeContext";
import {Container, Content} from './styles';
import {FiUser, FiArchive} from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
// import { Container } from './styles';'

const SignIn: React.FC = () => {
  // const themeToggle = useTheme();
  return (
    <>
    <header>
   {/* <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button>  */} 
    <img src={logoImg} alt="Uneb - Universidade do estado da Bahia"/>
    </header>
    <Container>
      <Content>
        
        <h1>Faça seu Login </h1>
        <form> 

          <input placeholder="E-mail" type="email" id="email"/>

          <input placeholder="Senha" type="password" id="senha"/>

          <button>Acessar</button>
        </form>

        <div className="botoes">
          <a href="#logado">
            <FiUser/> 
            Acessar como convidado
          </a>
          <a href="#conteudo">
            <FiArchive/>
            Verificar chamados
          </a>
        </div>
      </Content>
    
    </Container>
    </>
  );
}

export default SignIn;