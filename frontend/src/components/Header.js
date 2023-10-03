import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div>
      <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>eShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto">
              
            <LinkContainer to='/cart'>
              <Nav.Link><i className="fas fa-shopping-cart"></i>cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link><i className="fas fa-user"></i>login</Nav.Link>
            </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    </div>
  )
}

export default Header