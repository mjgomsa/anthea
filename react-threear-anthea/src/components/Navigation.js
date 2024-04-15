import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/brand/logo.png";
import { IoCloseSharp } from "react-icons/io5";
// import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <IoCloseSharp className="icons" />
      ) : (
        <GiHamburgerMenu className="icons" />
      )}
    </button>
  );

  const mobileNavbar = (
    <Navbar bg="transparent" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" className="mx-auto">
          <img
            src={logo}
            height="70"
            className="d-inline-block align-top"
            alt="Anthea logo"
            style={{ marginLeft: "33%" }}
          />
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
