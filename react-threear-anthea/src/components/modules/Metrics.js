import React from "react";
import { MemoizedDonutChart, MemoizedLineChart } from "../GraphComponents";

function Metrics({ products }) {
  // Calculate the percentage of products that are verified
  const verifiedProductsCount = products.filter(
    (product) => product.verification === "verified"
  ).length;
  //   const notverifiedProductsCount = products.filter(
  //     (product) => product.verification === "notverified"
  //   ).length;
  //   const pendingProductsCount = products.filter(
  //     (product) => product.verification === "pending"
  //   ).length;
  const totalProductsCount = products.length;
  const verifiedPercentage = (verifiedProductsCount / totalProductsCount) * 100;

  console.log(Math.floor(verifiedPercentage));
  // Donut data
  // const donutData = [
  //   { value: verifiedPercentage }, //verified
  //   { value: 100 - verifiedPercentage }, //anything else (pending or not verified)
  // ];
  const donutData = [
    { value: Math.floor(verifiedPercentage) }, //verified
    { value: 100 - Math.floor(verifiedPercentage) }, //anything else (pending or not verified)
  ];

  // Line data
  const totalSales = products.reduce(
    (total, product) => total + product.sales,
    0
  );
  console.log(totalSales);
  const lineData = [
    { date: new Date("2019-01-01"), value: 212 },
    { date: new Date("2020-01-01"), value: 378 },
    { date: new Date("2021-01-01"), value: 259 },
    { date: new Date("2022-01-01"), value: 700 },
    { date: new Date("2023-01-01"), value: 1000 },
    { date: new Date("2024-01-01"), value: totalSales },
  ];

  // Sorting the products based on sales
  const sortedProducts = products.slice().sort((a, b) => b.sales - a.sales);

  // Getting the top 3 products
  const top3Products = sortedProducts.slice(0, 3);

  // SVG components for 1, 2, and 3
  const svg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1422 0.5 15.5 3.85775 15.5 8C15.5 12.1422 12.1422 15.5 8 15.5C3.85775 15.5 0.5 12.1422 0.5 8ZM9.125 4.25C9.12497 4.10169 9.08096 3.95671 8.99855 3.83341C8.91614 3.7101 8.79902 3.61399 8.66199 3.55724C8.52497 3.50049 8.37419 3.48564 8.22873 3.51456C8.08326 3.54349 7.94964 3.61489 7.84475 3.71975L6.34475 5.21975C6.20813 5.3612 6.13254 5.55065 6.13424 5.7473C6.13595 5.94395 6.21483 6.13206 6.35389 6.27111C6.49294 6.41017 6.68105 6.48905 6.8777 6.49076C7.07435 6.49246 7.2638 6.41687 7.40525 6.28025L7.625 6.0605V11.75C7.625 11.9489 7.70402 12.1397 7.84467 12.2803C7.98532 12.421 8.17609 12.5 8.375 12.5C8.57391 12.5 8.76468 12.421 8.90533 12.2803C9.04598 12.1397 9.125 11.9489 9.125 11.75V4.25Z"
        fill="#4A25E3"
      />
    </svg>
  );

  const svg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1422 1.5 16.5 4.85775 16.5 9C16.5 13.1422 13.1422 16.5 9 16.5C4.85775 16.5 1.5 13.1422 1.5 9ZM7.875 7.125C7.87484 6.93992 7.92034 6.75766 8.00747 6.59438C8.0946 6.43109 8.22068 6.29182 8.37451 6.18892C8.52835 6.08602 8.70519 6.02266 8.88938 6.00446C9.07356 5.98626 9.25938 6.01379 9.43038 6.08459C9.60138 6.15539 9.75227 6.26729 9.86968 6.41037C9.98708 6.55344 10.0674 6.72327 10.1034 6.90481C10.1395 7.08634 10.1302 7.27396 10.0764 7.45105C10.0226 7.62813 9.92595 7.78921 9.795 7.92L6.924 10.7925C6.57257 11.144 6.37511 11.6207 6.375 12.1177V12.75C6.375 12.9489 6.45402 13.1397 6.59467 13.2803C6.73532 13.421 6.92609 13.5 7.125 13.5H10.875C11.0739 13.5 11.2647 13.421 11.4053 13.2803C11.546 13.1397 11.625 12.9489 11.625 12.75C11.625 12.5511 11.546 12.3603 11.4053 12.2197C11.2647 12.079 11.0739 12 10.875 12H7.89375C7.91204 11.9443 7.94312 11.8937 7.9845 11.8523L10.8563 8.98125C11.1615 8.676 11.3867 8.30018 11.512 7.8871C11.6373 7.47401 11.6588 7.0364 11.5746 6.61302C11.4903 6.18965 11.303 5.79358 11.0291 5.4599C10.7553 5.12621 10.4034 4.86521 10.0046 4.70002C9.60576 4.53482 9.17237 4.47052 8.74277 4.51282C8.31318 4.55512 7.90065 4.70271 7.54172 4.94252C7.18279 5.18233 6.88854 5.50695 6.68503 5.88764C6.48152 6.26833 6.37503 6.69333 6.375 7.125C6.375 7.32391 6.45402 7.51468 6.59467 7.65533C6.73532 7.79598 6.92609 7.875 7.125 7.875C7.32391 7.875 7.51468 7.79598 7.65533 7.65533C7.79598 7.51468 7.875 7.32391 7.875 7.125Z"
        fill="#4A25E3"
      />
    </svg>
  );

  const svg3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1422 1.5 16.5 4.85775 16.5 9C16.5 13.1422 13.1422 16.5 9 16.5C4.85775 16.5 1.5 13.1422 1.5 9ZM7.5 4.5C7.30109 4.5 7.11032 4.57902 6.96967 4.71967C6.82902 4.86032 6.75 5.05109 6.75 5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6H9.75L8.4 7.8C8.31643 7.91143 8.26554 8.04392 8.25303 8.18265C8.24052 8.32137 8.26689 8.46083 8.32918 8.58541C8.39147 8.70999 8.48722 8.81476 8.6057 8.88799C8.72418 8.96121 8.86072 9 9 9C9.24313 9 9.48262 9.0591 9.69784 9.17221C9.91306 9.28532 10.0976 9.44905 10.2354 9.6493C10.3733 9.84954 10.4605 10.0803 10.4894 10.3217C10.5183 10.5631 10.4881 10.8079 10.4013 11.0351C10.3146 11.2622 10.174 11.4649 9.99151 11.6256C9.80907 11.7863 9.5903 11.9002 9.35404 11.9576C9.11777 12.015 8.8711 12.0141 8.63527 11.955C8.39943 11.8959 8.1815 11.7803 8.00025 11.6183C7.92705 11.5515 7.84135 11.4999 7.74809 11.4664C7.65484 11.433 7.55587 11.4183 7.45692 11.4233C7.35797 11.4283 7.261 11.4529 7.17159 11.4956C7.08219 11.5383 7.00213 11.5983 6.93604 11.6721C6.86996 11.7459 6.81915 11.8321 6.78656 11.9256C6.75397 12.0192 6.74024 12.1183 6.74616 12.2172C6.75208 12.3161 6.77754 12.4128 6.82107 12.5018C6.8646 12.5909 6.92533 12.6704 6.99975 12.7358C7.32051 13.0224 7.69915 13.2366 8.11 13.3641C8.52085 13.4915 8.95429 13.5291 9.38094 13.4742C9.80758 13.4194 10.2175 13.2735 10.5827 13.0464C10.948 12.8192 11.2602 12.5162 11.4981 12.1578C11.736 11.7994 11.894 11.3941 11.9615 10.9692C12.029 10.5444 12.0043 10.11 11.8892 9.69559C11.774 9.28114 11.5711 8.8963 11.2941 8.56716C11.0172 8.23803 10.6727 7.9723 10.284 7.788L11.85 5.7C11.9336 5.58857 11.9845 5.45608 11.997 5.31735C12.0095 5.17863 11.9831 5.03917 11.9208 4.91459C11.8585 4.79001 11.7628 4.68524 11.6443 4.61201C11.5258 4.53879 11.3893 4.5 11.25 4.5H7.5Z"
        fill="#4A25E3"
      />
    </svg>
  );

  return (
    <>
      <div className="row d-flex align-items-stretch">
        <div className="col">
          <div className="greyBox align-items-baseline">
            <h3 className="bold center">Anthea IP Protected</h3>
            <MemoizedDonutChart data={donutData} />
            <h3 className="light center">of the storefront</h3>
          </div>
        </div>
        <div className="col">
          <div className="greyBox align-items-baseline">
            <h3 className="bold center">Top 3 Products at Copy Risk</h3>
            <div className="top3">
              {/* Mapping through top 3 products */}
              {top3Products.map((product, index) => (
                <div className="row" key={index}>
                  <div className="col-2">
                    {/* Displaying the corresponding SVG icon */}
                    {index === 0 && svg1}
                    {index === 1 && svg2}
                    {index === 2 && svg3}
                  </div>
                  <div className="col-10">
                    {/* Displaying product name */}
                    <p>{product.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-stretch">
        <div className="col">
          <div className="greyBox align-items-baseline">
            <h3 className="bold">
              Sales are{" "}
              <span style={{ color: "#4A25E3", fontStyle: "italic" }}>
                Increasing{" "}
              </span>
              ! <br></br>Time to Protect Your Products
            </h3>
            <MemoizedLineChart data={lineData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Metrics;
