import React from 'react';
import imageSimpsons from '../img/imageSimpsons.png'

const LogoSimpsons = () => {
    return (
        <div className="container">
           <img src={imageSimpsons} className="img-fluid" alt="logoSimpsons" /> 
        </div>
    );
};

export default LogoSimpsons;