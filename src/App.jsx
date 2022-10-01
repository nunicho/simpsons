import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import LogoSimpsons from './Components/LogoSimpsons';
import TarjetaHomero from './Components/TarjetaHomero';
import {useState, useEffect} from 'react'

const App = () => {
const [personaje, setPersonaje] = useState ({});

  useEffect (()=>{
consultarAPI();},[])

const consultarAPI  = async() => {
try {
  const respuesta  = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  console.log(respuesta)
  const dato = await respuesta.json();
  console.log(dato[0]);
  setPersonaje(dato[0]);
}catch (error){
  console.log(error)
 //mostrar un mensaje al usuario. 
}
}
  return (
   <Container className=" py-5 fondoPrincipal">
  <LogoSimpsons></LogoSimpsons>
  <TarjetaHomero></TarjetaHomero>
  </Container>
  );
};

export default App;