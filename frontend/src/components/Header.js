import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">eShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    </div>
  )
}

export default Header