import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import LogoSimpsons from './Components/LogoSimpsons';

const App = () => {
  return (
   <Container className="my-5">
  <LogoSimpsons>
  </LogoSimpsons>
  </Container>
  );
};

export default App;