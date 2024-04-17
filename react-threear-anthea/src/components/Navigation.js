import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/brand/logo.png";

export function Navigation() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as per your design
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const CustomToggle = () => (
    <button
      className={`navbar-toggler ${expanded ? "collapsed" : ""}`}
      type="button"
      onClick={toggleNavbar}
    >
      {expanded ? (
        // X
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M21.6777 20.1212C21.7799 20.2234 21.8609 20.3448 21.9162 20.4783C21.9715 20.6118 22 20.7549 22 20.8994C22 21.044 21.9715 21.1871 21.9162 21.3206C21.8609 21.4541 21.7799 21.5755 21.6777 21.6777C21.5755 21.7799 21.4541 21.8609 21.3206 21.9162C21.1871 21.9715 21.044 22 20.8994 22C20.7549 22 20.6118 21.9715 20.4783 21.9162C20.3448 21.8609 20.2234 21.7799 20.1212 21.6777L11 12.555L1.87876 21.6777C1.67236 21.884 1.39243 22 1.10055 22C0.808666 22 0.528737 21.884 0.322344 21.6777C0.11595 21.4713 5.75373e-09 21.1913 0 20.8994C-5.75373e-09 20.6076 0.11595 20.3276 0.322344 20.1212L9.44496 11L0.322344 1.87876C0.11595 1.67236 -2.17471e-09 1.39243 0 1.10055C2.17471e-09 0.808666 0.11595 0.528737 0.322344 0.322344C0.528737 0.11595 0.808666 2.17471e-09 1.10055 0C1.39243 -2.17471e-09 1.67236 0.11595 1.87876 0.322344L11 9.44496L20.1212 0.322344C20.3276 0.11595 20.6076 -5.75373e-09 20.8994 0C21.1913 5.75373e-09 21.4713 0.11595 21.6777 0.322344C21.884 0.528737 22 0.808666 22 1.10055C22 1.39243 21.884 1.67236 21.6777 1.87876L12.555 11L21.6777 20.1212Z"
            fill="#CA0CD0"
          />
        </svg>
      ) : (
        // Hamburger
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
        >
          <path
            d="M1 1H23M1 11.5H23M1 22H23"
            stroke="#CA0CD0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );

  const mobileNavbar = (
    <Navbar bg="transparent" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand className="mx-auto">
          <div className="row">
            <div className="col-12 d-flex justify-content-end align-items-center">
              {/* Right column with logo */}
              <img
                src={logo}
                height="70"
                className="d-inline-block align-top logo"
                alt="Anthea logo"
              />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle as={CustomToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/gallery">Product Gallery</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const desktopNavbar = (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="ml-auto">
          <img
            src={logo}
            height="90"
            className="d-inline-block align-top"
            alt="Anthea logo"
          />
        </Navbar.Brand>
        <Nav className="ml-lg-auto">
          <Nav.Link className="nav-link-dk" href="/">
            Dashboard
          </Nav.Link>
          <Nav.Link className="nav-link-dk" href="/gallery">
            Product Gallery
          </Nav.Link>
          <Nav.Link className="nav-link-dk" href="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  return isDesktop ? desktopNavbar : mobileNavbar;
}
