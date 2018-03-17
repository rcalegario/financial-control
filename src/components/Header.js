import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
      return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <span>FC</span>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}>
                    Home
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1}>
                    Login
                </NavItem>
            </Nav>
        </Navbar>
      );
    }
  }
  