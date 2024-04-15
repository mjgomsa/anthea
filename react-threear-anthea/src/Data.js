import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import img000_full from "./assets/products/000-full.png";
import img001_full from "./assets/products/001-full.png";
import img002_full from "./assets/products/002-full.png";
import img003_full from "./assets/products/003-full.png";
import img004_full from "./assets/products/004-full.png";
import img005_full from "./assets/products/005-full.png";
import img006_full from "./assets/products/006-full.png";
import img007_full from "./assets/products/007-full.png";
import img008_full from "./assets/products/008-full.png";
import img009_full from "./assets/products/009-full.png";
import img010_full from "./assets/products/010-full.png";
import img011_full from "./assets/products/011-full.png";
import img012_full from "./assets/products/012-full.png";
import img013_full from "./assets/products/013-full.png";
import img014_full from "./assets/products/014-full.png";
import img015_full from "./assets/products/015-full.png";
import img016_full from "./assets/products/016-full.png";
import img017_full from "./assets/products/017-full.png";
import img000_circle from "./assets/products/000-circle.png";
import img001_circle from "./assets/products/001-circle.png";
import img002_circle from "./assets/products/002-circle.png";
import img003_circle from "./assets/products/003-circle.png";
import img004_circle from "./assets/products/004-circle.png";
import img005_circle from "./assets/products/005-circle.png";
import img006_circle from "./assets/products/006-circle.png";
import img007_circle from "./assets/products/007-circle.png";
import img008_circle from "./assets/products/008-circle.png";
import img009_circle from "./assets/products/009-circle.png";
import img010_circle from "./assets/products/010-circle.png";
import img011_circle from "./assets/products/011-circle.png";
import img012_circle from "./assets/products/012-circle.png";
import img013_circle from "./assets/products/013-circle.png";
import img014_circle from "./assets/products/014-circle.png";
import img015_circle from "./assets/products/015-circle.png";
import img016_circle from "./assets/products/016-circle.png";
import img017_circle from "./assets/products/017-circle.png";

export const products = [
  {
    name: "Jolie Blu-Ylw Jacket",
    verification: true,
    image: img000_full,
    circle: img000_circle,
    pid: "JCKT-YVN1VOY",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Re-Cruiser Jacket",
    verification: true,
    image: img001_full,
    circle: img001_circle,
    pid: "JCKT-5TTKBT9",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Cotton Patchwork"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 10,
  },
  {
    name: "Jolie Black Jacket",
    verification: true,
    image: img002_full,
    circle: img002_circle,
    pid: "JCKT-ISFRHK2",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "80s Puffer Jacket",
    verification: true,
    image: img003_full,
    circle: img003_circle,
    pid: "JCKT-USO0YET",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Metallic Finish"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Rosie Nylon Jacket",
    verification: true,
    image: img004_full,
    circle: img004_circle,
    pid: "JCKT-AEBKMWB",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Canvas Lined"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Pink Ribbon Jacket",
    verification: true,
    image: img005_full,
    circle: img005_circle,
    pid: "JCKT-CIPM6HU",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Metallic Embellishment"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Reik Satin Jacket",
    verification: true,
    image: img006_full,
    circle: img006_circle,
    pid: "JCKT-8LHAW22",
    anid: "000_G_000",
    materials: ["Metallic Nylon Polymer", "Cotton Patchwork"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Americana Jacket",
    verification: true,
    image: img007_full,
    circle: img007_circle,
    pid: "JCKT-15UPUFO",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic Cotton Cuffs"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Dean Black Cruiser",
    verification: true,
    image: img008_full,
    circle: img008_circle,
    pid: "JCKT-OZ24YFQ",
    anid: "000_G_000",
    materials: ["Denim / Nylon Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Bea Aviator Jacket",
    verification: true,
    image: img009_full,
    circle: img009_circle,
    pid: "JCKT-K9XZDX0",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Jack Satin Hoodie",
    verification: true,
    image: img010_full,
    circle: img010_circle,
    pid: "JCKT-9GV4VM5",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Retro Cruise Jacket",
    verification: true,
    image: img011_full,
    circle: img011_circle,
    pid: "JCKT-KJ3Q2SV",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic cotton cuffs"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Satin Bockey Jacket",
    verification: true,
    image: img012_full,
    circle: img012_circle,
    pid: "JCKT-DV3ZCAP",
    anid: "000_G_000",
    materials: ["Satin Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Satin Jockey Jacket",
    verification: true,
    image: img013_full,
    circle: img013_circle,
    pid: "JCKT-4LGDLX7",
    anid: "000_G_000",
    materials: ["Satin Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Reveal Nylon Jacket",
    verification: true,
    image: img014_full,
    circle: img014_circle,
    pid: "JCKT-MEK1XHJ",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Color-block hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Joe Leather Jacket",
    verification: true,
    image: img015_full,
    circle: img015_circle,
    pid: "JCKT-5JNTL7D",
    anid: "000_G_000",
    materials: ["100% Authentic Leather", "Attachable Cotton Hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Gummy Jacket",
    verification: true,
    image: img016_full,
    circle: img016_circle,
    pid: "JCKT-EDGW16R",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Elastic drawstring hood"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
  {
    name: "Tangy Jill Jacket",
    verification: true,
    image: img017_full,
    circle: img017_circle,
    pid: "JCKT-0ZADF9Q",
    anid: "000_G_000",
    materials: ["Nylon Polymer", "Cotton Lining"],
    designer: "John Miescerlli",
    value: 150.0,
    protection: 1,
    launch: new Date(2024, 5, 24),
    sales: 20,
  },
];
