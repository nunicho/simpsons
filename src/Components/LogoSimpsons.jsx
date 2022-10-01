import React from 'react';
import imageSimpsons from '../img/imageSimpsons.png'
import '../index.css'
import { Button } from 'react-bootstrap';



const LogoSimpsons = () => {
    return (
        <div className="container">
           <img src={imageSimpsons} className="img-fluid" alt="logoSimpsons my-3" /> 
        </div>
    );
};

export default LogoSimpsons;