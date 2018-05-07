import React from 'react';
import './Footer.css';
import { Row, Col, FormGroup, Input, Button } from 'reactstrap';

const Footer = props => (
   <div className="box-footer">
      <Row>
         <Col md="6">
            <FormGroup>
               <Input type="email" id="exampleInputEmail1" placeholder="Enter message" />
            </FormGroup>
         </Col>
         <Col md="6">
            <FormGroup>
               <Button color="primary">Enviar</Button>{' '}
            </FormGroup>
         </Col>
      </Row>
   </div>
)

export default Footer;