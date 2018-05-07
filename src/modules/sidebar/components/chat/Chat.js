import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Image } from './../../../common';
import './Chat.css';

class Chat extends Component {
   render() {
      return (
         <div className="content-chats">
            <Row>
               <Col md="2">
                  <Image path="http://lorempixel.com/400/400/people" alt="camila ama papai" />
               </Col>
               <Col md="8">
                  <Row>
                     <Col>Camila</Col>
                  </Row>
                  <Row>
                     <Col>eu te amo papai...</Col>
                  </Row>
               </Col>
               <Col md="2">5/5/2018</Col>
            </Row>
         </div>
      )
   }
}

export default Chat;