import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Content.css';
import { Topo, Flow, Footer } from './index';

class Content extends Component {
   render() {
      return (
         <div className="d-flex flex-column c-flex-columns">
            <Topo />
            <Flow/>
            <Footer />
         </div>
      );
   }
}

export default Content;