import React from 'react';
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {Container,} from 'react-bootstrap';
import Frase from './Components/Frase';
import Character from  './Components/Character'
import { useEffect, useState } from 'react';
import imageSimpsons from './img/imageSimpsons.png'
import Spinner from './Components/Spinner';



function App () {

  const [personaje, setPersonaje] = useState ({});

useEffect (()=>{
consultarAPI();
 }, [])

const consultarAPI = async() =>{
try {
  // mostrar el spinner
const respuesta = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes')
console.log(respuesta);
const dato = await respuesta.json();
console.log(dato[0]);
setPersonaje(dato[0]);
//mostrar componente  frase
}catch (error){
  console.log(error)
  //se recomienda agregar un mensaje al usuario 
}

}
  return (
   <Container className=" py-5 fondoPrincipal">
  <article>         
        <section className="container text-center">
           <img src={imageSimpsons} className="w-75" alt="logoSimpsons my-3" /> 
           <div className="text-center my-3 ">
           <button className='botonFrase' onClick={consultarAPI}> Obtener Frase</button>
           </div>
        </section>
        <section >
        <div className="container row rounded mx-1 my-5 bg-light p-3 text-md-right text-lg-right text-center">
           <div className="col-12 col-md-6 col-lg-6">
            <Character personaje={personaje}></Character>
          </div>
           <div className="col-12 col-md-6 col-lg-6"> 
           <p className="fw-bold">{personaje.character}</p>
           <Frase personaje={personaje}></Frase>
           <Spinner></Spinner>
           </div>
        </div>
        </section>
  </article>   
  </Container>
  );
};

export default App;