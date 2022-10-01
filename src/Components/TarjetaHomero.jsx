import React from 'react';
import { Fragment } from 'react';
// import imageHomero from '../img/imageHomero.png'
import {Card, Row, Col, } from 'react-bootstrap'


const TarjetaHomero = ({personaje}) => {

    return (
      <Fragment>
                   <div className="text-center my-3 ">
            <Button className="botonFrase" onClick={consultarAPI}> Obtener Frase</Button>
            </div>
        <Card>
          <Row>
          <Col  sm="12" md="4">
          <img src={personaje.image} className="img-fluid col-4" alt={personaje.character} /> 
          </Col>
          <Col sm="12" mmd="8">
          <Card.Title>
            <h3>{personaje.character}</h3>
            </Card.Title>
               <p className="fs-6 fw-bold" personaje={personaje} >Facts are meaningless. You could use facts to prove anything that's even remotely true</p>
             </Col>
          </Row>
        </Card>
</Fragment>

    );
};

export default TarjetaHomero;