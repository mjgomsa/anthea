import { useEffect, useState } from "react";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SimilarProdsSum from "./modules/SimilarProdsSum.js";
import button from "../assets/brand/button.png";
import { Link } from "react-router-dom";
import imgPlaceholder from "../assets/brand/imgPlaceholder.png";
import addImage from "../assets/brand/addImg.png";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const AddProtection = ({ products }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as per your design
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const thumprint = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M6.895 0.000794629C3.14687 0.0579994 0.0832179 3.10264 0.00178075 6.85258C-0.0267384 8.11388 0.287764 9.35926 0.911723 10.4558C0.936232 10.4987 0.972059 10.534 1.01528 10.5578C1.05851 10.5817 1.10746 10.5932 1.1568 10.5911C1.20613 10.5891 1.25394 10.5735 1.29499 10.546C1.33605 10.5186 1.36877 10.4804 1.38958 10.4356C1.89506 9.36209 2.1564 8.18991 2.15482 7.00333C2.15363 6.27655 2.31648 5.55886 2.63123 4.90375C2.94598 4.24864 3.40452 3.67301 3.97268 3.21974C4.02841 3.17617 4.09217 3.144 4.16033 3.12507C4.22849 3.10614 4.29971 3.10082 4.36993 3.10941C4.44014 3.11801 4.50798 3.14034 4.56956 3.17515C4.63114 3.20996 4.68526 3.25656 4.72884 3.31228C4.77241 3.368 4.80458 3.43176 4.82351 3.49992C4.84244 3.56807 4.84776 3.63929 4.83917 3.7095C4.83058 3.77971 4.80824 3.84754 4.77343 3.90912C4.73862 3.9707 4.69202 4.02482 4.63629 4.06839C4.19707 4.42123 3.84283 4.86834 3.59981 5.37661C3.35679 5.88488 3.2312 6.4413 3.23234 7.00468C3.23412 8.62103 2.80553 10.2087 1.9906 11.6046C1.96039 11.6559 1.94803 11.7158 1.95546 11.7748C1.96289 11.8339 1.98968 11.8888 2.03165 11.931C2.16626 12.0656 2.30692 12.2002 2.4523 12.3227C2.48209 12.3477 2.51696 12.366 2.55449 12.3763C2.59203 12.3865 2.63134 12.3885 2.66972 12.3821C2.7081 12.3757 2.74464 12.3611 2.77682 12.3392C2.809 12.3173 2.83605 12.2887 2.85612 12.2554C3.45194 11.2663 3.87504 10.183 4.10729 9.05194C4.13576 8.912 4.21866 8.78911 4.33774 8.71029C4.45683 8.63147 4.60235 8.60318 4.7423 8.63165C4.88224 8.66012 5.00514 8.74301 5.08397 8.86209C5.16279 8.98117 5.19108 9.12669 5.16261 9.26662C4.90226 10.5429 4.42245 11.7643 3.74452 12.8766C3.7254 12.9082 3.713 12.9434 3.70808 12.98C3.70317 13.0167 3.70584 13.0539 3.71594 13.0895C3.72605 13.125 3.74336 13.1581 3.7668 13.1866C3.79024 13.2152 3.81932 13.2386 3.85221 13.2555C4.01845 13.3396 4.18873 13.4177 4.3617 13.489C4.42142 13.5146 4.48839 13.5177 4.55023 13.4978C4.61208 13.4779 4.66464 13.4363 4.69821 13.3807C5.8545 11.4602 6.46465 9.2605 6.46291 7.01881C6.46152 6.8806 6.51231 6.74696 6.60512 6.64454C6.69794 6.54212 6.82596 6.47847 6.96365 6.46628C7.03746 6.4611 7.11155 6.47119 7.18129 6.49592C7.25103 6.52065 7.31492 6.55948 7.36898 6.61C7.42304 6.66052 7.4661 6.72165 7.49549 6.78955C7.52487 6.85746 7.53995 6.93069 7.53976 7.00468C7.54243 9.29348 6.95826 11.5448 5.84304 13.5435C5.82158 13.5818 5.80979 13.6248 5.80872 13.6686C5.80765 13.7125 5.81733 13.756 5.8369 13.7953C5.85648 13.8345 5.88536 13.8684 5.92104 13.894C5.95671 13.9196 5.9981 13.936 6.04159 13.9419C6.24574 13.9702 6.45236 13.9895 6.66145 13.9998C6.71172 14.0017 6.7615 13.9894 6.80516 13.9645C6.84881 13.9395 6.8846 13.9028 6.90846 13.8585C8.02779 11.7648 8.61444 9.42785 8.61662 7.05381C8.61998 6.16209 7.92339 5.40564 7.0323 5.38881C6.81792 5.3847 6.60488 5.42331 6.40558 5.50239C6.20628 5.58146 6.02472 5.69942 5.87149 5.84939C5.71826 5.99936 5.59642 6.17833 5.51307 6.37587C5.42973 6.57341 5.38655 6.78557 5.38605 6.99997C5.38507 7.13442 5.33443 7.26376 5.24386 7.36314C5.1533 7.46252 5.0292 7.52492 4.89541 7.53837C4.82079 7.54502 4.74561 7.53602 4.67466 7.51196C4.60372 7.48789 4.53858 7.44929 4.4834 7.39862C4.42823 7.34794 4.38424 7.28631 4.35424 7.21767C4.32424 7.14903 4.3089 7.07488 4.3092 6.99997C4.30918 6.64406 4.37974 6.29168 4.5168 5.96322C4.65385 5.63475 4.85469 5.33673 5.10768 5.08638C5.36067 4.83603 5.66079 4.63834 5.99068 4.50472C6.32058 4.37111 6.6737 4.30424 7.0296 4.30798C8.51028 4.32346 9.7002 5.59811 9.6928 7.07804C9.68624 9.27317 9.21559 11.4421 8.31173 13.4426C8.29119 13.4887 8.28402 13.5396 8.29102 13.5895C8.29802 13.6395 8.31892 13.6865 8.35133 13.7251C8.38375 13.7638 8.42637 13.7926 8.47435 13.8082C8.52232 13.8238 8.57372 13.8256 8.62268 13.8134C8.85618 13.758 9.08666 13.6906 9.31321 13.6115C9.34852 13.599 9.38082 13.5792 9.40806 13.5535C9.43529 13.5278 9.45686 13.4966 9.47137 13.4621C9.78479 12.7194 10.043 11.9546 10.244 11.1739C10.2617 11.1054 10.2927 11.0411 10.3352 10.9845C10.3778 10.928 10.431 10.8804 10.492 10.8445C10.5529 10.8086 10.6203 10.785 10.6904 10.7751C10.7604 10.7652 10.8317 10.7692 10.9002 10.7869C10.9687 10.8046 11.0331 10.8356 11.0896 10.8781C11.1461 10.9207 11.1937 10.9739 11.2296 11.0349C11.2656 11.0958 11.2891 11.1632 11.299 11.2333C11.3089 11.3033 11.3049 11.3746 11.2872 11.4431C11.237 11.6392 11.1831 11.8343 11.1257 12.0286C11.1088 12.0845 11.1105 12.1445 11.1307 12.1993C11.1508 12.2542 11.1883 12.301 11.2374 12.3326C11.2865 12.3643 11.3446 12.3792 11.4028 12.375C11.4611 12.3707 11.5165 12.3477 11.5605 12.3092C12.6519 11.3721 13.4281 10.1213 13.7833 8.72732C14.1385 7.3333 14.0555 5.86369 13.5456 4.51852C13.0357 3.17334 12.1237 2.01794 10.9337 1.20957C9.74369 0.401196 8.33347 -0.0208769 6.895 0.000794629ZM11.7126 9.22624C11.6962 9.35615 11.6331 9.47565 11.5349 9.56236C11.4368 9.64907 11.3105 9.69706 11.1795 9.69734C11.157 9.69734 11.1346 9.69599 11.1122 9.6933C11.042 9.68457 10.9743 9.66209 10.9128 9.62716C10.8513 9.59222 10.7973 9.54552 10.7538 9.48971C10.7104 9.4339 10.6784 9.37008 10.6596 9.30189C10.6409 9.23371 10.6357 9.16249 10.6445 9.09232C10.7303 8.4002 10.7735 7.70345 10.7737 7.00603C10.7723 6.00692 10.3747 5.04914 9.66821 4.34266C8.96169 3.63619 8.00386 3.23866 7.0047 3.23724C6.84721 3.23717 6.68987 3.24683 6.53358 3.26618C6.39176 3.28403 6.24866 3.24481 6.13576 3.15716C6.02285 3.0695 5.9494 2.94059 5.93155 2.79878C5.9137 2.65697 5.95292 2.51388 6.04058 2.40098C6.12823 2.28809 6.25715 2.21463 6.39897 2.19679C7.0812 2.11193 7.77367 2.17299 8.43052 2.37594C9.08737 2.57888 9.69359 2.91907 10.209 3.37397C10.7245 3.82887 11.1374 4.3881 11.4204 5.01461C11.7034 5.64111 11.85 6.3206 11.8505 7.00804C11.8504 7.74958 11.8043 8.4904 11.7126 9.22624Z"
        fill="black"
      />
    </svg>
  );

  const FormCarrousel = ({}) => (
    <Row>
      <Col className="col-3">
        <img className="formCarrouselImg" src={addImage}></img>
      </Col>
      <Col className="col-3">
        <img className="formCarrouselImg" src={imgPlaceholder}></img>
      </Col>
      <Col className="col-3">
        <img className="formCarrouselImg" src={imgPlaceholder}></img>
      </Col>
      <Col className="col-3">
        <img className="formCarrouselImg" src={imgPlaceholder}></img>
      </Col>
    </Row>
  );

  const mobileAddProt = (
    <div className="mobileCont">
      <div className="pinkBox align-items-baseline">
        <p>
          <span className="pinkSpan">Security Note</span> <br></br>
          Creating records on a public blockchain does not make the registered
          IP assets public.
        </p>
      </div>
      <h2>Store Details</h2>
      <div className="greyBox align-items-baseline">
        <h3>Store Key</h3>
        <Row>
          <Col className="col-1">{thumprint}</Col>
          <Col>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXX69bb1ea</p>
          </Col>
        </Row>
      </div>
      <h2>Product Details</h2>
      <div className="greyBox align-items-baseline">
        <div className="formSection">
          <h3 className="required">Product Name</h3>
          <input type="pname" className="form" name="pname" />
        </div>
        <div className="formSection">
          <h3 className="required">Serial Number (PID)</h3>
          <input type="pid" className="form" name="pid" />
        </div>
        <div className="formSection">
          <h3 className="required">Product Thumbnail</h3>
          <FormCarrousel />
        </div>
        <div className="formSection">
          <h3>Product Generated Key (AnID)</h3>
          <Row>
            <Col className="col-1">{thumprint}</Col>
            <Col>
              <p>XXXXXXXXXXXXXXXXXXXXXXXXXX69bb1ea</p>
            </Col>
          </Row>
        </div>
      </div>
      <h2>IP Protection</h2>
      <div className="greyBox align-items-baseline">
        <div className="formSection">
          <h3 className="required">Select Protection</h3>
        </div>
        <div className="formSection">
          <h3 className="required">Records of Design Process</h3>
          <h4>Original Sketches, Fabric Patterns, Stitch Patterns, etc.</h4>
          <FormCarrousel />
        </div>
        <div className="formSection">
          <h3 className="required">Designer Name</h3>
          <input type="dname" className="form" name="dname" />
        </div>
        <div className="formSection">
          <h3 className="required">Date Documents</h3>
          <DatePicker size="md" />
        </div>
        <div className="formSection">
          <h3 className="required">Evidence of Use and Reputation</h3>
          <h4>Advertisement, Marketing and Sales Documentation</h4>
          <FormCarrousel />
        </div>
      </div>
      <Link to={"/"} className="image-button fixedButton">
        <img src={button} alt="Button inflated" />
        <span className="button-text">Submit Protection</span>
      </Link>
    </div>
  );

  const desktopAddProt = <div className="desktopCont">{mobileAddProt}</div>;

  return isDesktop ? desktopAddProt : mobileAddProt;
};
