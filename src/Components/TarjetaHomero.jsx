import React from 'react';
import imageHomero from '../img/imageHomero.png'

const TarjetaHomero = () => {
    return (
        <div className="container row rounded my-5">
           <img src={imageHomero} className="img-fluid col-4" alt="imageHomero" /> 
           <div className="col-8"> 
           <p className="fw-bold"> Homer Simpson</p>
           <p className="fs-6">Facts are meaningless. You could use facts to prove anything that's even remotely true</p>
           </div>
        </div>
    );
};

export default TarjetaHomero;