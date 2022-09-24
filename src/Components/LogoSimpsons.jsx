import React from 'react';
import imageSimpsons from '../img/imageSimpsons.png'
import '../index.css'



const LogoSimpsons = () => {
    return (
        <div className="container">
           <img src={imageSimpsons} className="img-fluid" alt="logoSimpsons my-3" /> 
           <div className="text-center my-3 ">
           <button className="botonFrase"> Obtener Frase </button>
           </div>
        </div>
    );
};

export default LogoSimpsons;