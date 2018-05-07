import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sidebar } from './modules/sidebar';
import { Content } from './modules/content';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="sidebar-content" xs="4">
            <Sidebar />
          </Col>
          <Col className="content-right" xs="8">
            <Content />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
