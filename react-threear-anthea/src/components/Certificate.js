import { useEffect, useRef, useState } from "react";
import React from "react";
import img from "../assets/brand/certificate.png";
import CertificateGenerator from "./modules/CertificateGenerator";

export const Certificate = ({ product }) => {
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

  const mobileCertificate = (
    <div
      className="mobileCont"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="proseCertificate">
        <p className="">
          This certificate hereby acknowledges that this product has
          successfully secured intellectual property protection through Anthea,
          the innovative blockchain-powered platform safeguarding the rights of
          independent designers.
        </p>
        <br></br>
        <p>
          With this certificate, you assert your exclusive rights to the design,
          ensuring that their creative work remains protected from unauthorized
          use or replication.
        </p>
        <br></br>
        <p>Date: 05/15/2024</p>
      </div>

      {/* <CertificateGenerator name="Peter" course="Web Development" /> */}
    </div>
  );
  const desktopCertificate = (
    <div className="desktopCont">{mobileCertificate}</div>
  );

  return isDesktop ? desktopCertificate : mobileCertificate;
};
