import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { FaCircle } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  MemoizedDonutChart,
  MemoizedLineChart,
  MemoizedBarChart,
} from "./GraphComponents.js";
import { ScraperPreview } from "./Scraper.js";

export const Home = (products) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const greeting = "Good morning!";
  const donutData = [{ value: 40 }, { value: 60 }];
  const lineData = [
    { date: new Date("2024-01-01"), value: 10 },
    { date: new Date("2024-02-01"), value: 20 },
    { date: new Date("2024-03-01"), value: 15 },
    { date: new Date("2024-04-01"), value: 25 },
    { date: new Date("2024-05-01"), value: 30 },
  ];
  const barData = [
    { label: "Product A", value: 60 },
    { label: "Product B", value: 50 },
    { label: "Product C", value: 30 },
  ];

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
      <div className="greyBox align-items-baseline">
        {[...Array(5)].map((_, index) => (
          <div className="row" key={index}>
            <div className="col-auto">
              <FaCircle className="notificationIcon" />
            </div>
            <div className="col">
              <p>Your design Top No.{index} is now verified!</p>
            </div>
          </div>
        ))}
        <MdOutlineKeyboardArrowDown className="arrowsIcon" />
      </div>
      <h2>Metrics</h2>
      <div className="row">
        <div className="greyBox align-items-baseline">
          <p className="label">
            We found these products similar to your <br></br>‘
            {products[14].name}’:
          </p>
          <ScraperPreview {...products} />
          <button className="linkButton">
            <div className="row">
              <div className="newcol">
                <p className="label labelBold">Look into them</p>
                <MdOutlineKeyboardArrowRight className="arrowsIcon arrowBtn" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="greyBox align-items-baseline">
            <MemoizedDonutChart data={donutData} />
            <p className="label">Of your storefront is Anthea IP Protected</p>
            <button className="linkButton">
              <div className="row">
                <div className="newcol">
                  <p className="label labelBold">Add Protection</p>
                  <MdOutlineKeyboardArrowRight className="arrowsIcon arrowBtn" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="greyBox align-items-baseline">
            <MemoizedBarChart data={barData} />
            <p className="label">Your top 3 selling products are at risk</p>
            <button className="linkButton">
              <div className="row">
                <div className="newcol">
                  <p className="label labelBold">Add Protection</p>
                  <MdOutlineKeyboardArrowRight className="arrowsIcon arrowBtn" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="greyBox align-items-baseline">
          <MemoizedLineChart data={lineData} />
          <p className="label">
            Your sales are 'increasing', consider protecting your store
          </p>
          <button className="linkButton">
            <div className="row">
              <div className="newcol">
                <p className="label labelBold">Add Protection</p>
                <MdOutlineKeyboardArrowRight className="arrowsIcon arrowBtn" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <h2>Quicklinks</h2>
    </div>
  );

  const desktopHome = (
    <Container className="desktopCont">
      <h1>Hello Desktop</h1>
    </Container>
  );

  return isDesktop ? desktopHome : mobileHome;
};
