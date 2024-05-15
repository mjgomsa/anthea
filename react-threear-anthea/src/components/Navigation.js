import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/brand/logo.png";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    setIsDesktop(window.innerWidth > 768);

    if (window.innerWidth > 768) {
      document.body.style.zoom = 3;
    } else {
      document.body.style.zoom = 1;
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleBack = () => {
    navigate(-1);
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

  const backsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="32"
      viewBox="0 0 21 32"
      fill="none"
    >
      <path
        d="M2.19602 15.6515L2.28287 15.741L2.19601 15.6515C1.99103 15.8506 1.875 16.119 1.875 16.3998C1.875 16.6807 1.99103 16.949 2.19601 17.1481L2.28299 17.0585L2.19602 17.1481L14.1887 28.7954C14.1889 28.7956 14.1891 28.7958 14.1892 28.7959C14.292 28.8978 14.4147 28.979 14.5501 29.0353C14.6857 29.0917 14.8316 29.122 14.9793 29.1246C15.127 29.1273 15.2739 29.1022 15.4116 29.0508C15.5493 28.9994 15.6753 28.9225 15.7821 28.8243C15.889 28.726 15.9746 28.6083 16.0336 28.4778C16.0926 28.3473 16.1237 28.2067 16.125 28.0643C16.1262 27.9219 16.0976 27.7808 16.0408 27.6493C15.9842 27.5181 15.9008 27.3992 15.7959 27.2993C15.7958 27.2992 15.7956 27.299 15.7955 27.2989L4.57208 16.3998L15.7955 5.50072C15.7956 5.50056 15.7958 5.50041 15.796 5.50025C15.9009 5.40041 15.9842 5.28153 16.0408 5.15029C16.0975 5.01881 16.1262 4.87774 16.125 4.73531C16.1237 4.59289 16.0926 4.45231 16.0336 4.32178C15.9746 4.19126 15.889 4.07359 15.7821 3.97534C15.6753 3.87712 15.5493 3.80023 15.4116 3.7488C15.2739 3.69738 15.127 3.67234 14.9793 3.67499C14.8316 3.67765 14.6857 3.70796 14.5501 3.76433C14.4147 3.82061 14.292 3.90186 14.1892 4.00372C14.189 4.00387 14.1889 4.00403 14.1887 4.00419L2.19602 15.6515Z"
        fill="#CA0CD0"
        stroke="#CA0CD0"
        strokeWidth="0.25"
      />
    </svg>
  );

  const mobileNavbar = (
    <Navbar bg="transparent" expand="false lg" expanded={expanded}>
      <Container>
        <Nav className="mr-auto">
          <Nav.Link onClick={handleBack} style={{ borderBottom: "0px" }}>
            {backsvg}
          </Nav.Link>{" "}
          {/* Back button */}
        </Nav>
        <Navbar.Brand>
          <img
            src={logo}
            height="70"
            className="d-inline-block align-top logo"
            alt="Anthea logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle as={CustomToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/gallery">Product Gallery</Nav.Link>
            <Nav.Link href="/similar">Similar Products</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const desktopNavbar = <div className="desktopNav">{mobileNavbar}</div>;

  return isDesktop ? desktopNavbar : mobileNavbar;
}

// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/brand/logo.png";
// import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

// export function Navigation() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const navigate = useNavigate(); // Initializing useNavigate hook

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 768);
//     };

//     setIsDesktop(window.innerWidth > 768);

//     if (window.innerWidth > 768) {
//       document.body.style.zoom = 3;
//     } else {
//       document.body.style.zoom = 1;
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   const handleBack = () => {
//     navigate(-1); // Navigating back
//   };

//   const CustomToggle = () => (
//     <button
//       className={`navbar-toggler ${expanded ? "collapsed" : ""}`}
//       type="button"
//       onClick={toggleNavbar}
//     >
//       {expanded ? (
//         // X
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           viewBox="0 0 22 22"
//           fill="none"
//         >
//           <path
//             d="M21.6777 20.1212C21.7799 20.2234 21.8609 20.3448 21.9162 20.4783C21.9715 20.6118 22 20.7549 22 20.8994C22 21.044 21.9715 21.1871 21.9162 21.3206C21.8609 21.4541 21.7799 21.5755 21.6777 21.6777C21.5755 21.7799 21.4541 21.8609 21.3206 21.9162C21.1871 21.9715 21.044 22 20.8994 22C20.7549 22 20.6118 21.9715 20.4783 21.9162C20.3448 21.8609 20.2234 21.7799 20.1212 21.6777L11 12.555L1.87876 21.6777C1.67236 21.884 1.39243 22 1.10055 22C0.808666 22 0.528737 21.884 0.322344 21.6777C0.11595 21.4713 5.75373e-09 21.1913 0 20.8994C-5.75373e-09 20.6076 0.11595 20.3276 0.322344 20.1212L9.44496 11L0.322344 1.87876C0.11595 1.67236 -2.17471e-09 1.39243 0 1.10055C2.17471e-09 0.808666 0.11595 0.528737 0.322344 0.322344C0.528737 0.11595 0.808666 2.17471e-09 1.10055 0C1.39243 -2.17471e-09 1.67236 0.11595 1.87876 0.322344L11 9.44496L20.1212 0.322344C20.3276 0.11595 20.6076 -5.75373e-09 20.8994 0C21.1913 5.75373e-09 21.4713 0.11595 21.6777 0.322344C21.884 0.528737 22 0.808666 22 1.10055C22 1.39243 21.884 1.67236 21.6777 1.87876L12.555 11L21.6777 20.1212Z"
//             fill="#CA0CD0"
//           />
//         </svg>
//       ) : (
//         // Hamburger
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="23"
//           viewBox="0 0 24 23"
//           fill="none"
//         >
//           <path
//             d="M1 1H23M1 11.5H23M1 22H23"
//             stroke="#CA0CD0"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       )}
//     </button>
//   );

//   const mobileNavbar = (
//     <Navbar bg="transparent" expand="false lg" expanded={expanded}>
//       <Container>
//         <Navbar.Brand className="mx-auto">
//           <div className="row">
//             <div className="col-12 d-flex justify-content-end align-items-center">
//               <img
//                 src={logo}
//                 height="70"
//                 className="d-inline-block align-top logo"
//                 alt="Anthea logo"
//               />
//             </div>
//           </div>
//         </Navbar.Brand>
//         <Navbar.Toggle as={CustomToggle} aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link onClick={handleBack}>Back</Nav.Link> {/* Back button */}
//             <Nav.Link href="/">Dashboard</Nav.Link>
//             <Nav.Link href="/gallery">Product Gallery</Nav.Link>
//             <Nav.Link href="/similar">Similar Products</Nav.Link>
//             <Nav.Link href="/logout">Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );

//   const desktopNavbar = <div className="desktopNav">{mobileNavbar}</div>;

//   return isDesktop ? desktopNavbar : mobileNavbar;
// }
