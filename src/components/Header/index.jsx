import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";

import { List } from "phosphor-react";

import "./style.css";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "20px", alignItems: "center" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <List size={24} className="burger" color="#000" />
              </Nav.Link>
              <Navbar.Brand href="#" className="logo">
                CIOSP Report
              </Navbar.Brand>
            </Nav>
            <Nav>
              <Navbar.Text>Sua sessão expira em:</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
