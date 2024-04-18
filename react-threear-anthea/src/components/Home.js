import { useEffect, useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Notifications from "./modules/Notification.js";
import Metrics from "./modules/Metrics.js";
import SimilarProdsSum from "./modules/SimilarProdsSum.js";
import simprodimg from "../assets/brand/similarprod.png";
import { similarProds } from "../Data.js";
import button from "../assets/brand/button.png";
import { Link } from "react-router-dom";

export const Home = ({ products }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  // const [expanded, setExpanded] = useState(false);
  const greeting = "Welcome Back!";

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as per your design
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileHome = (
    <div className="mobileCont">
      <h1>{greeting}</h1>
      <h2>Notifications</h2>
      <Notifications />

      <h2>Metrics</h2>
      <Metrics products={products} />

      <br></br>
      <br></br>
      {/* <h2>Similar Products</h2> */}
      {/* <SimilarProdsSum products={products} /> */}
      <img src={simprodimg} style={{ width: "100%" }}></img>

      {/* <h2>Quicklinks</h2> */}
      <Link to={"/anthea"} className="image-button fixedButton">
        <img src={button} alt="Button inflated" />
        <span className="button-text">Add Product</span>
      </Link>
    </div>
  );

  const desktopHome = (
    <Container className="desktopCont">
      <h1>Hello Desktop</h1>
    </Container>
  );

  return isDesktop ? desktopHome : mobileHome;
};
