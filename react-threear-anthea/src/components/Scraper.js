import React, { useEffect, useState } from "react";
import similar00 from "../assets/products/similar-000.png";
import similar01 from "../assets/products/similar-001.png";
import similar02 from "../assets/products/similar-002.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const ScraperPreview = (products) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as per your design
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileScraper = (
    <div className="scraper">
      <img
        className="product-circle"
        src={products[14].circle}
        alt={`Product`}
      ></img>
      <Container style={{ marginBottom: "10px" }}>
        <Row xs="auto">
          <Col>
            <img
              className="product-similar"
              src={similar00}
              alt={`Product`}
            ></img>
            <p className="labelsemiBold">Shein</p>
            <p className="label">$13.00</p>
          </Col>
          <Col>
            <img
              className="product-similar"
              src={similar01}
              alt={`Product`}
            ></img>
            <p className="labelsemiBold">GoodRep</p>
            <p className="label">$254.00</p>
          </Col>
          <Col>
            <img
              className="product-similar"
              src={similar02}
              alt={`Product`}
            ></img>
            <p className="labelsemiBold">Amazon</p>
            <p className="label">$34.99 </p>
          </Col>
        </Row>
      </Container>
    </div>
  );

  const desktopScraper = (
    <>
      <h1>desktop scraper</h1>
    </>
  );

  return isDesktop ? desktopScraper : mobileScraper;
};
