import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from 'react-bootstrap';
import Frase from './Components/Frase';
import Character from  './Components/Character'
import { useEffect, useState } from 'react';
import imageSimpsons from './img/imageSimpsons.png'



function App () {

  const [personaje, setPersonaje] = useState ({});

useEffect (()=>{
consultarAPI();
 }, [])

const consultarAPI = async() =>{
try {
const respuesta = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes')
console.log(respuesta);
const dato = await respuesta.json();
console.log(dato[0]);
setPersonaje(dato[0]);
}catch (error){
  console.log(error)
  //se recomienda agregar un mensaje al usuario 
}

}
  return (
   <Container className=" py-5 fondoPrincipal">
  <article>         
        <div className="container">
           <img src={imageSimpsons} className="img-fluid" alt="logoSimpsons my-3" /> 
           <div className="text-center my-3 ">
           <Button className="botonFrase" onClick={consultarAPI}> Obtener Frase</Button>
           </div>
        </div>
        <div className="container row rounded mx-1
         my-5 bg-light p-3">
            <Character personaje={personaje}></Character>
           <div className="col-8"> 
           <p className="fw-bold">{personaje.character}</p>
           <Frase personaje={personaje}></Frase>
           </div>
        </div>
  </article>   
  </Container>
  );
};

export default App;