import React, { useState, useEffect } from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Topbar() {
      const [isSticky, setSticky] = useState(false);
      const [isCollapsed, setCollapsed] = useState(null);
    
      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        });
      }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{height:"6rem"}}
      className={isSticky || isCollapsed ? "shadow-sm bg-transparent py-2" : "py-4"}
    >
      <Container>
      <Navbar.Brand
        as={Link}
        to="/"
        className="ml-md-5"
      >
        <img
          alt="Logo"
          src={logo}
          style={{height:"3rem"}}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle
        onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
        aria-controls="navbar-nav"
      />

      <Navbar.Collapse id="navbar-nav" className={isCollapsed}>
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="mr-md-5"
            onClick={() => window.scrollTo(500, 0)}
            active
          >
            Home
          </Nav.Link>
          <Nav.Link href="#services" className="mr-md-5" active>
            Services
          </Nav.Link>
          <Nav.Link href="#reviews" className="mr-md-5" active>
            Reviews
          </Nav.Link>
          <Nav.Link href="#contact" className="mr-md-5" active>
            Contact Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/profile"
            className="mr-md-5"
            active
          >
            Dashboard
          </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="mr-md-5 px-4 btn btn-main"
              active
            >
              Login
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Topbar;
