import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Frase from './Components/Frase';
import { useEffect, useState } from 'react';
import imageHomero from './img/imageHomero.png'
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
           <button className="botonFrase"> Obtener Frase </button>
           </div>
        </div>
        <div className="container row rounded mx-1
         my-5 bg-light p-3">
           <img src={imageHomero} className="img-fluid col-4" alt="imageHomero" /> 
           <div className="col-8"> 
           <p className="fw-bold"> Homer Simpson</p>
           <Frase personaje ={personaje}></Frase>
           </div>
        </div>
  </article>   
  </Container>
  );
};

export default App;