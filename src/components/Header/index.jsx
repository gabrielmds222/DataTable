import React, { useState, useEffect } from "react";

import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";

import { List, Repeat, User, SignOut } from "phosphor-react";
import { useProSidebar } from "react-pro-sidebar";

import "./style.css";

function Header() {
  const [timeInSeconds, setTimeInSeconds] = useState(60 * 60);

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const { collapseSidebar } = useProSidebar();

  useEffect(() => {
    if (timeInSeconds === 0) {
      alert("Sessão finalizada");
      return;
    } else {
      setTimeout(() => {
        setTimeInSeconds(timeInSeconds - 1);
      }, 1000);
    }
  }, [timeInSeconds]);

  // function repeatCount() {
  //   setTimeInSeconds(60 * 60);
  // }

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navbarLeft"
              style={{ maxHeight: "20px", alignItems: "center" }}
              navbarScroll
            >
              <button onClick={() => collapseSidebar()} className="burger">
                <List size={14} color="#000" weight="bold" />
              </button>
              <Navbar.Brand href="#" className="logo">
                CIOSP Report
              </Navbar.Brand>
            </Nav>
            <Nav style={{ alignItems: "center" }}>
              <div className="timerContainer">
                <Navbar.Text>Sua sessão expira em: </Navbar.Text>
                <div>
                  <div className="timer">
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </div>
                  <Button
                    variant="outline-secondary"
                    style={{ backgroundColor: "#F4F4F4", border: "none" }}
                    // onClick={repeatCount}
                  >
                    <Repeat size={14} color="#000" weight="bold" />
                  </Button>
                </div>
              </div>
              <div className="user">
                <User size={14} color="#000" weight="bold" />
                <Navbar.Text style={{ marginLeft: "10px" }}>
                  Gabriel Medeiros da Silva
                </Navbar.Text>
              </div>
              <div className="signout">
                <SignOut size={14} color="#000" weight="bold" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
