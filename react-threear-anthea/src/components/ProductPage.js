// ProductPage.js
import React from "react";
import { useEffect, useState } from "react";
import button from "../assets/brand/button.png";
import { Link } from "react-router-dom";

export const ProductPage = ({ product }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const getVerificationIcon = (status) => {
    switch (status) {
      case "verified":
        return svg_verified;
      case "not verified":
        return svg_notverified;
      case "pending":
        return svg_pending;
      default:
        return null;
    }
  };

  const getButtonText = (status) => {
    switch (status) {
      case "verified":
        return "View Certificate";
      case "not verified":
        return "Add Protection";
      case "pending":
        return "View Certificate";
      default:
        return null;
    }
  };

  const generateRoute = (verificationStatus) => {
    switch (verificationStatus) {
      case "verified":
        return "/certificate"; // Route for verified products
      case "not verified":
        return "/addprotection"; // Route for products not verified
      case "pending":
        return ""; // Route for products with pending verification
      default:
        return "/"; // Default route
    }
  };

  const svg_verified = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <mask
        id="path-1-outside-1_1049_169"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="29"
        height="29"
        fill="black"
      >
        <rect fill="white" width="29" height="29" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27ZM7.70202 14.692L11.172 18.162L21.052 8.29202C21.239 8.10504 21.4926 8 21.757 8C22.0214 8 22.275 8.10504 22.462 8.29202C22.649 8.479 22.754 8.73259 22.754 8.99702C22.754 9.26145 22.649 9.51504 22.462 9.70202L11.882 20.282C11.492 20.672 10.862 20.672 10.472 20.282L6.29202 16.102C6.19944 16.0094 6.126 15.8995 6.07589 15.7786C6.02579 15.6576 6 15.528 6 15.397C6 15.1326 6.10504 14.879 6.29202 14.692C6.479 14.505 6.73259 14.4 6.99702 14.4C7.26145 14.4 7.51504 14.505 7.70202 14.692Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27ZM7.70202 14.692L11.172 18.162L21.052 8.29202C21.239 8.10504 21.4926 8 21.757 8C22.0214 8 22.275 8.10504 22.462 8.29202C22.649 8.479 22.754 8.73259 22.754 8.99702C22.754 9.26145 22.649 9.51504 22.462 9.70202L11.882 20.282C11.492 20.672 10.862 20.672 10.472 20.282L6.29202 16.102C6.19944 16.0094 6.126 15.8995 6.07589 15.7786C6.02579 15.6576 6 15.528 6 15.397C6 15.1326 6.10504 14.879 6.29202 14.692C6.479 14.505 6.73259 14.4 6.99702 14.4C7.26145 14.4 7.51504 14.505 7.70202 14.692Z"
        fill="#02D230"
      />
      <path
        d="M11.172 18.162L9.75781 19.5762L11.1713 20.9897L12.5855 19.577L11.172 18.162ZM7.70202 14.692L9.11623 13.2778L9.11623 13.2778L7.70202 14.692ZM21.052 8.29202L22.4655 9.70695L22.4662 9.70623L21.052 8.29202ZM11.882 20.282L10.4678 18.8678L10.4678 18.8678L11.882 20.282ZM10.472 20.282L11.8862 18.8678L11.8862 18.8678L10.472 20.282ZM6.29202 16.102L7.70623 14.6878L7.70623 14.6878L6.29202 16.102ZM6.29202 14.692L7.70623 16.1062L7.70623 16.1062L6.29202 14.692ZM25 14.5C25 20.299 20.299 25 14.5 25V29C22.5081 29 29 22.5081 29 14.5H25ZM14.5 4C20.299 4 25 8.70101 25 14.5H29C29 6.49187 22.5081 0 14.5 0V4ZM4 14.5C4 8.70101 8.70101 4 14.5 4V0C6.49187 0 0 6.49187 0 14.5H4ZM14.5 25C8.70101 25 4 20.299 4 14.5H0C0 22.5081 6.49187 29 14.5 29V25ZM12.5862 16.7478L9.11623 13.2778L6.28781 16.1062L9.75781 19.5762L12.5862 16.7478ZM19.6385 6.87709L9.75852 16.7471L12.5855 19.577L22.4655 9.70695L19.6385 6.87709ZM21.757 6C20.9622 6 20.1999 6.31576 19.6378 6.87781L22.4662 9.70623C22.2781 9.89433 22.023 10 21.757 10V6ZM23.8762 6.87781C23.3142 6.31576 22.5519 6 21.757 6V10C21.491 10 21.2359 9.89433 21.0478 9.70623L23.8762 6.87781ZM24.754 8.99702C24.754 8.20217 24.4383 7.43986 23.8762 6.87781L21.0478 9.70623C20.8597 9.51813 20.754 9.26302 20.754 8.99702H24.754ZM23.8762 11.1162C24.4383 10.5542 24.754 9.79187 24.754 8.99702H20.754C20.754 8.73102 20.8597 8.47591 21.0478 8.28781L23.8762 11.1162ZM13.2962 21.6962L23.8762 11.1162L21.0478 8.28781L10.4678 18.8678L13.2962 21.6962ZM9.05781 21.6962C10.2289 22.8673 12.1252 22.8673 13.2962 21.6962L10.4678 18.8678C10.8589 18.4768 11.4952 18.4768 11.8862 18.8678L9.05781 21.6962ZM4.87781 17.5162L9.05781 21.6962L11.8862 18.8678L7.70623 14.6878L4.87781 17.5162ZM4.22814 16.5439C4.37875 16.9075 4.59951 17.2379 4.87781 17.5162L7.70623 14.6878C7.79937 14.7809 7.87325 14.8915 7.92365 15.0132L4.22814 16.5439ZM4 15.397C4 15.7906 4.07752 16.1803 4.22814 16.5439L7.92365 15.0132C7.97406 15.1349 8 15.2653 8 15.397H4ZM4.87781 13.2778C4.31576 13.8399 4 14.6022 4 15.397H8C8 15.663 7.89433 15.9181 7.70623 16.1062L4.87781 13.2778ZM6.99702 12.4C6.20216 12.4 5.43986 12.7158 4.87781 13.2778L7.70623 16.1062C7.51814 16.2943 7.26303 16.4 6.99702 16.4V12.4ZM9.11623 13.2778C8.55419 12.7158 7.79188 12.4 6.99702 12.4V16.4C6.73101 16.4 6.4759 16.2943 6.28781 16.1062L9.11623 13.2778Z"
        fill="white"
        mask="url(#path-1-outside-1_1049_169)"
      />
    </svg>
  );

  const svg_notverified = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <mask
        id="path-1-outside-1_1049_221"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="29"
        height="29"
        fill="black"
      >
        <rect fill="white" width="29" height="29" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27ZM9.70711 7.29289C9.31658 6.90237 8.68342 6.90237 8.29289 7.29289C7.90237 7.68342 7.90237 8.31658 8.29289 8.70711L13.5858 14L8.29289 19.2929C7.90237 19.6834 7.90237 20.3166 8.29289 20.7071C8.68342 21.0976 9.31658 21.0976 9.70711 20.7071L15 15.4142L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.4142 14L21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289C21.3166 6.90237 20.6834 6.90237 20.2929 7.29289L15 12.5858L9.70711 7.29289Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27ZM9.70711 7.29289C9.31658 6.90237 8.68342 6.90237 8.29289 7.29289C7.90237 7.68342 7.90237 8.31658 8.29289 8.70711L13.5858 14L8.29289 19.2929C7.90237 19.6834 7.90237 20.3166 8.29289 20.7071C8.68342 21.0976 9.31658 21.0976 9.70711 20.7071L15 15.4142L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.4142 14L21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289C21.3166 6.90237 20.6834 6.90237 20.2929 7.29289L15 12.5858L9.70711 7.29289Z"
        fill="#FF0303"
      />
      <path
        d="M8.29289 7.29289L9.70711 8.70711L9.70711 8.70711L8.29289 7.29289ZM9.70711 7.29289L8.29289 8.70711L8.29289 8.70711L9.70711 7.29289ZM8.29289 8.70711L9.70711 7.29289L9.70711 7.29289L8.29289 8.70711ZM13.5858 14L15 15.4142L16.4142 14L15 12.5858L13.5858 14ZM8.29289 19.2929L6.87868 17.8787L6.87868 17.8787L8.29289 19.2929ZM8.29289 20.7071L6.87868 22.1213L6.87868 22.1213L8.29289 20.7071ZM9.70711 20.7071L11.1213 22.1213L11.1213 22.1213L9.70711 20.7071ZM15 15.4142L16.4142 14L15 12.5858L13.5858 14L15 15.4142ZM20.2929 20.7071L18.8787 22.1213L18.8787 22.1213L20.2929 20.7071ZM21.7071 20.7071L23.1213 22.1213L23.1213 22.1213L21.7071 20.7071ZM21.7071 19.2929L23.1213 17.8787L23.1213 17.8787L21.7071 19.2929ZM16.4142 14L15 12.5858L13.5858 14L15 15.4142L16.4142 14ZM21.7071 8.70711L23.1213 10.1213L23.1213 10.1213L21.7071 8.70711ZM21.7071 7.29289L23.1213 5.87868L23.1213 5.87868L21.7071 7.29289ZM20.2929 7.29289L18.8787 5.87868L18.8787 5.87868L20.2929 7.29289ZM15 12.5858L13.5858 14L15 15.4142L16.4142 14L15 12.5858ZM25 14.5C25 20.299 20.299 25 14.5 25V29C22.5081 29 29 22.5081 29 14.5H25ZM14.5 4C20.299 4 25 8.70101 25 14.5H29C29 6.49187 22.5081 0 14.5 0V4ZM4 14.5C4 8.70101 8.70101 4 14.5 4V0C6.49187 0 0 6.49187 0 14.5H4ZM14.5 25C8.70101 25 4 20.299 4 14.5H0C0 22.5081 6.49187 29 14.5 29V25ZM9.70711 8.70711C9.31658 9.09763 8.68342 9.09763 8.29289 8.70711L11.1213 5.87868C9.94975 4.70711 8.05025 4.70711 6.87868 5.87868L9.70711 8.70711ZM9.70711 7.29289C10.0976 7.68342 10.0976 8.31658 9.70711 8.70711L6.87868 5.87868C5.70711 7.05025 5.70711 8.94975 6.87868 10.1213L9.70711 7.29289ZM15 12.5858L9.70711 7.29289L6.87868 10.1213L12.1716 15.4142L15 12.5858ZM9.70711 20.7071L15 15.4142L12.1716 12.5858L6.87868 17.8787L9.70711 20.7071ZM9.70711 19.2929C10.0976 19.6834 10.0976 20.3166 9.70711 20.7071L6.87868 17.8787C5.70711 19.0503 5.70711 20.9497 6.87868 22.1213L9.70711 19.2929ZM8.29289 19.2929C8.68342 18.9024 9.31658 18.9024 9.70711 19.2929L6.87868 22.1213C8.05025 23.2929 9.94975 23.2929 11.1213 22.1213L8.29289 19.2929ZM13.5858 14L8.29289 19.2929L11.1213 22.1213L16.4142 16.8284L13.5858 14ZM21.7071 19.2929L16.4142 14L13.5858 16.8284L18.8787 22.1213L21.7071 19.2929ZM20.2929 19.2929C20.6834 18.9024 21.3166 18.9024 21.7071 19.2929L18.8787 22.1213C20.0503 23.2929 21.9497 23.2929 23.1213 22.1213L20.2929 19.2929ZM20.2929 20.7071C19.9024 20.3166 19.9024 19.6834 20.2929 19.2929L23.1213 22.1213C24.2929 20.9497 24.2929 19.0503 23.1213 17.8787L20.2929 20.7071ZM15 15.4142L20.2929 20.7071L23.1213 17.8787L17.8284 12.5858L15 15.4142ZM20.2929 7.29289L15 12.5858L17.8284 15.4142L23.1213 10.1213L20.2929 7.29289ZM20.2929 8.70711C19.9024 8.31658 19.9024 7.68342 20.2929 7.29289L23.1213 10.1213C24.2929 8.94975 24.2929 7.05025 23.1213 5.87868L20.2929 8.70711ZM21.7071 8.70711C21.3166 9.09763 20.6834 9.09763 20.2929 8.70711L23.1213 5.87868C21.9497 4.70711 20.0503 4.70711 18.8787 5.87868L21.7071 8.70711ZM16.4142 14L21.7071 8.70711L18.8787 5.87868L13.5858 11.1716L16.4142 14ZM8.29289 8.70711L13.5858 14L16.4142 11.1716L11.1213 5.87868L8.29289 8.70711Z"
        fill="white"
        mask="url(#path-1-outside-1_1049_221)"
      />
    </svg>
  );

  const svg_pending = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <path
        d="M14.501 1H14.5C11.83 1 9.21987 1.79176 6.99981 3.27516C4.77974 4.75856 3.04941 6.86697 2.02763 9.33377C1.00585 11.8006 0.738504 14.515 1.2594 17.1337C1.7803 19.7525 3.06605 22.1579 4.95406 24.0459C6.84207 25.9339 9.24754 27.2197 11.8663 27.7406C14.485 28.2615 17.1994 27.9942 19.6662 26.9724C22.133 25.9506 24.2414 24.2203 25.7248 22.0002C27.2082 19.7801 28 17.17 28 14.5V14.499C27.9965 10.9199 26.5732 7.48843 24.0424 4.95762C21.5116 2.42682 18.0801 1.00349 14.501 1ZM18.5225 18.5267L18.5225 18.5267L18.5176 18.5317C18.4972 18.5525 18.473 18.569 18.4462 18.5803C18.4223 18.5904 18.3968 18.5961 18.3709 18.5973C18.3164 18.5943 18.2648 18.571 18.2264 18.5318L18.2265 18.5318L18.2193 18.5246L14.2927 14.598V6.79268C14.2927 6.73446 14.3158 6.67863 14.357 6.63746C14.3981 6.5963 14.454 6.57317 14.5122 6.57317C14.5704 6.57317 14.6263 6.5963 14.6674 6.63746C14.7086 6.67863 14.7317 6.73446 14.7317 6.79268V14.0122V14.4264L15.0246 14.7193L18.5225 18.2172C18.5227 18.2174 18.5229 18.2176 18.5231 18.2178C18.5636 18.2589 18.5863 18.3142 18.5863 18.3719C18.5863 18.4299 18.5634 18.4856 18.5225 18.5267Z"
        fill="#D9D9D9"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );

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

  // useEffect(() => {
  //   // Check if verification is pending
  //   if (product.verification === "pending") {
  //     setIsPendingVerification(true);
  //   } else {
  //     setIsPendingVerification(false);
  //   }

  //   // Other code...
  // }, [product.verification]);

  // const mainCardClassName = isPendingVerification
  //   ? "mainCard pendingVerification"
  //   : "mainCard";

  const mobileProduct = (
    <div
      className="mobileCont"
      style={{ background: "#E3E2DE", height: "90vh" }}
    >
      <img
        className="productPageImage"
        src={product.image}
        alt={product.name}
      />
      <div className="whiteBox align-items-center">
        <div className="row">
          <div className="col-10" style={{ textAlign: "right" }}>
            <h6>{product.verification.toUpperCase()}</h6>
          </div>
          <div className="col-2" style={{ alignContent: "left" }}>
            <div className="verification-icon-card">
              {getVerificationIcon(product.verification)}
            </div>
          </div>
        </div>
        <div className="mainCard" style={{ position: "relative" }}>
          {product.verification === "pending" && (
            <div
              className="red-box"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.84)",
                zIndex: 1, // Ensure the red box is above the button
              }}
            />
          )}
          <div className="row marg29">
            <div className="col">
              <h1 style={{ textAlign: "center", fontSize: "32px" }}>
                {product.name}
              </h1>
            </div>
          </div>
          <div className="table-gal">
            <div className="row">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>PID</p>
              </div>
              <div className="col-6">
                <p>{product.pid}</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>AnID</p>
              </div>
              <div className="col-6">
                <p>{product.anid}</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>Materials</p>
              </div>
              <div className="col-6">
                <p>{product.materials.join(", ")}</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>Designer</p>
              </div>
              <div className="col-6">
                <p>{product.designer}</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>Value</p>
              </div>
              <div className="col-6">
                <p>${product.value.toFixed(2)}</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>Protection</p>
              </div>
              <div className="col-6">
                <p>Blah</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right" }}>Launch Date</p>
              </div>
              <div className="col-6">
                <p>{product.launch.toLocaleDateString()}</p>
              </div>
            </div>
            <div className="row marg11">
              <div className="col-6">
                <p style={{ textAlign: "right", fontWeight: "800" }}>Sales</p>
              </div>
              <div className="col-6">
                <p>{product.sales}</p>
              </div>
            </div>
          </div>
          <Link
            to={generateRoute(product.verification)}
            className={`btn ${
              product.verification === "pending" ? "unclickable" : ""
            } image-button`}
          >
            <img src={button} alt="Button inflated" />
            <span className="button-text">
              {getButtonText(product.verification)}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );

  const desktopProduct = <div className="desktopCont">{mobileProduct}</div>;
  return isDesktop ? desktopProduct : mobileProduct;
};
