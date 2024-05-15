import React from "react";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { similarProds } from "../Data";
import { Link } from "react-router-dom";

export const SimilarPoductPage = ({ products }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as per your design
    };

    // Set initial state based on screen width
    setIsDesktop(window.innerWidth > 768);

    // Scale up elements to 3x if it's a desktop view
    if (window.innerWidth > 768) {
      document.body.style.zoom = 3; // Adjust the zoom factor as needed
    } else {
      document.body.style.zoom = 1; // Reset zoom for mobile view
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rightArrow = (
    <svg
      className="rightArrow"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="18"
      viewBox="0 0 8 18"
      fill="none"
    >
      <path
        d="M5.98598 11.8249L5.98598 11.8249C6.07427 11.7391 6.125 11.6227 6.125 11.5C6.125 11.3773 6.07427 11.2609 5.98598 11.1751L5.98598 11.1751L1.70348 7.01595C1.70331 7.01578 1.70313 7.0156 1.70295 7.01543C1.65878 6.97173 1.60628 6.93708 1.54866 6.91313C1.49082 6.88908 1.42875 6.87621 1.366 6.87508C1.30324 6.87395 1.24074 6.88458 1.18204 6.90651C1.12333 6.92843 1.06936 6.9613 1.02342 7.00354C0.977461 7.04579 0.940413 7.09663 0.914789 7.15332C0.889156 7.21003 0.875564 7.27126 0.875017 7.3334C0.874471 7.39555 0.886986 7.45701 0.911633 7.51414C0.936174 7.57103 0.972159 7.6223 1.01715 7.6652C1.01733 7.66537 1.01751 7.66554 1.01769 7.66571L4.96605 11.5L1.01769 15.3343C1.01752 15.3344 1.01734 15.3346 1.01717 15.3348C0.972169 15.3777 0.936178 15.429 0.911634 15.4859C0.886986 15.543 0.874472 15.6044 0.875018 15.6666C0.875565 15.7287 0.889156 15.79 0.914791 15.8467C0.940414 15.9034 0.977462 15.9542 1.02342 15.9965C1.06936 16.0387 1.12333 16.0716 1.18204 16.0935C1.24074 16.1154 1.30324 16.126 1.366 16.1249C1.42876 16.1238 1.49082 16.1109 1.54867 16.0869C1.6063 16.0629 1.6588 16.0283 1.70299 15.9845C1.70315 15.9844 1.70332 15.9842 1.70349 15.984L5.98598 11.8249Z"
        fill="#CA0CD0"
        stroke="#CA0CD0"
        strokeWidth="0.25"
      />
    </svg>
  );

  const SimilarProdMainBox = ({ index }) => (
    <div className="similarProdMainBox">
      <Link className="linksimilarTitle" to={`/product/${products[index].pid}`}>
        <Row className="similarProdTitle">
          <Col className="col-2">
            <img
              className="product-similar-main"
              src={products[index].circle}
            ></img>
          </Col>
          <Col>
            <h3 className="product-similar-mainName">{products[index].name}</h3>
          </Col>
          <Col className="col-1">{rightArrow}</Col>
        </Row>
      </Link>
      <Row>
        <Col>
          <img
            className="product-similar"
            src={similarProds["prod" + index][0]}
            alt={`Product`}
          />
          <p className="labelsemiBold">Shein</p>
          <p className="label">$13.00</p>
        </Col>
        <Col>
          <img
            className="product-similar"
            src={similarProds["prod" + index][1]}
            alt={`Product`}
          />
          <p className="labelsemiBold">GoodRep</p>
          <p className="label">$254.00</p>
        </Col>
        <Col>
          <img
            className="product-similar"
            src={similarProds["prod" + index][2]}
            alt={`Product`}
          ></img>
          <p className="labelsemiBold">Amazon</p>
          <p className="label">$34.99 </p>
        </Col>
      </Row>
    </div>
  );

  const mobileSimilarPage = (
    <div className="mobileCont">
      <div className="pinkBox align-items-baseline">
        <p>
          <span className="pinkSpan">Warning</span> <br></br>
          Our system utilizes advanced computer vision and scraping technologies
          to summarize web products similar to Anthea-verified items. It
          visualizes popular designs on other platforms but does not provide a
          comprehensive list.
        </p>
      </div>
      <h2>Similar Products</h2>
      <div className="row d-flex align-items-stretch">
        <div className="col">
          <div className="greyBox align-items-baseline">
            <SimilarProdMainBox index={14} />
            <SimilarProdMainBox index={3} />
            <SimilarProdMainBox index={15} />
          </div>
        </div>
      </div>
    </div>
  );

  const desktopSimilarPage = (
    <div className="desktopCont">{mobileSimilarPage}</div>
  );
  return isDesktop ? desktopSimilarPage : mobileSimilarPage;
};
