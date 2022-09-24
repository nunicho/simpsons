import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import LogoSimpsons from './Components/LogoSimpsons';
import TarjetaHomero from './Components/TarjetaHomero';

const App = () => {
  return (
   <Container className=" py-5 fondoPrincipal">
  <LogoSimpsons></LogoSimpsons>
  <TarjetaHomero></TarjetaHomero>
  </Container>
  );
};

export default App;