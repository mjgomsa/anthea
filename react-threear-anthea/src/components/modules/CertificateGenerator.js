import React from "react";
import jsPDF from "jspdf";
import img from "../../assets/brand/certificate.png";

const generateCertificate = (name, course) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add background image
  doc.addImage(
    img,
    "PNG",
    0,
    0,
    doc.internal.pageSize.getWidth(),
    doc.internal.pageSize.getHeight()
  );

  // Add recipient name
  doc.setFontSize(36);
  doc.setFont("helvetica"); // Change the font family and style
  doc.text(name, 105, 160, { align: "center" }); // 105 and 160: horizontal and vertical positions of the text

  // Add course name
  doc.setFontSize(20);
  doc.text(course, 105, 195, { align: "center" }); // 105 and 195: horizontal and vertical positions of the text

  // Save the PDF
  doc.save(`${name}-${course}.pdf`);
};

function CertificateGenerator(props) {
  return (
    <div>
      <button onClick={() => generateCertificate(props.name, props.course)}>
        Download PDF
      </button>
    </div>
  );
}

export default CertificateGenerator;
