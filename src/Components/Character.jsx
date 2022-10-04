import React from 'react';


const Character = ({personaje}) => {
    return (
       <img src={personaje.image} className="img-fluid col-4" alt={personaje.character} />
    );
};

export default Character;