import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import LogoSimpsons from './Components/LogoSimpsons';
import TarjetaHomero from './Components/TarjetaHomero';

const App = () => {
  return (
   <Container className="my-5">
  <LogoSimpsons></LogoSimpsons>
  <TarjetaHomero></TarjetaHomero>
  </Container>
  );
};

export default App;