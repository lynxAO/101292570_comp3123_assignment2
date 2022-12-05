import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import List from './components/list'
import Add from './components/add';
import React, { Component } from 'react';
import Update from './components/update';
import View from './components/view';
import Delete from './components/delete';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                Employee Management App
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" />
              <Nav className="me-auto">
                <Link to="/">
                  <Button variant="outline-light" size="sm" style={{marginRight: 15}}>
                    Employee List
                  </Button>
                </Link>
                <Link to="/add-employee">
                  <Button variant="outline-light" size="sm">
                    Add Employee
                  </Button>
                </Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={ <List /> } />
            <Route path="/add-employee" element={ <Add /> } />
            <Route path="/update-employee/:id" element={ <Update /> } />
            <Route path="/view-employee/:id" element={ <View /> } />
            <Route path="/delete-employee/:id" element={ <Delete /> } />
          </Routes>
      </div>
    </Router>
    );
  }
}

export default App;
