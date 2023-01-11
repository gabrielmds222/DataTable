import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";

import { List, Repeat, User, SignOut } from "phosphor-react";

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
            <Nav style={{ alignItems: "center" }}>
              <div className="timerContainer">
                <Navbar.Text>Sua sessão expira em: </Navbar.Text>
                <div className="timer">59:00</div>
                <Button
                  variant="outline-secondary"
                  style={{ backgroundColor: "#F4F4F4" }}
                >
                  <Repeat size={14} color="#000" />
                </Button>
              </div>
              <div className="user">
                <User size={24} color="#000" />
                <Navbar.Text>Gabriel Medeiros da Silva</Navbar.Text>
              </div>
              <div className="signout">
                <SignOut size={24} color="#000" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
