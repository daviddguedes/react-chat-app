import React from 'react';
import './Topo.css';
import { Row, Col } from 'reactstrap';
import { Image } from './../../../common';

const Topo = props => (
   <div className="box-topo">
      <Row>
         <Col md="1">
            <Image path="http://lorempixel.com/400/400/people" alt="camila ama papai" />
         </Col>
         <Col>
            <Row>
               <Col>Camila</Col>
            </Row>
            <Row>
               <Col>visto por último em 05/05/2018</Col>
            </Row>
         </Col>
      </Row>
   </div>
)

export default Topo;