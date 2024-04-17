// import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { similarProds } from "../../Data";

const SimilarProdsSum = ({ products }) => {
  return (
    <div className="row d-flex align-items-stretch">
      <div className="col">
        <div className="greyBox align-items-baseline">
          <Row xs="auto">
            <Col>
              <img
                className="product-similar"
                src={similarProds[0].simImages[0]}
                alt={`Product`}
              ></img>
              <p className="labelsemiBold">Shein</p>
              <p className="label">$13.00</p>
            </Col>
            <Col>
              <img
                className="product-similar"
                src={similarProds[0].simImages[1]}
                alt={`Product`}
              ></img>
              <p className="labelsemiBold">GoodRep</p>
              <p className="label">$254.00</p>
            </Col>
            <Col>
              <img
                className="product-similar"
                src={similarProds[0].simImages[2]}
                alt={`Product`}
              ></img>
              <p className="labelsemiBold">Amazon</p>
              <p className="label">$34.99 </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default SimilarProdsSum;
