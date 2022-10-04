import React from 'react';

const Frase = ({personaje}) => {
    return (
           <p className="fs-6">{personaje.quote}</p>
    );
};

export default Frase;