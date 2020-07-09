import React from 'react';
import { useTheme } from "../../ThemeContext";
import {Button} from '../../styles/components';
// import { Container } from './styles';

export default function Home() {
   const themeToggle = useTheme();
  return (
    <>
     <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button> 
      <h1>teste</h1>
      </>
  );
}