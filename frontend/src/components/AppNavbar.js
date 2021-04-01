import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal'

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: 'black'}} expand="sm" >
          <Container>
            <NavbarBrand style={{color: 'white'}} href="/">MarketPlace</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>        
                <NavItem>
                  <RegisterModal/>
                </NavItem>
                <NavItem>
                  <LoginModal/>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
