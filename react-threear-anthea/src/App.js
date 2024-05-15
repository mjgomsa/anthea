import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.js";
import { Home } from "./components/Home.js";
import { Gallery } from "./components/Gallery.js";
import { ProductPage } from "./components/ProductPage.js";
import { SimilarPoductPage } from "./components/SimilarPoductPage.js";
import { AddProtection } from "./components/AddProtection.js";
import { Certificate } from "./components/Certificate.js";
import { products } from "./Data";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/gallery" element={<Gallery products={products} />} />
        {products.map((product, index) => (
          <Route
            key={index}
            path={`/product/${product.pid}`}
            element={<ProductPage product={product} />}
          />
        ))}
        <Route
          path="/similar"
          element={<SimilarPoductPage products={products} />}
        />
        <Route
          path="/addprotection"
          element={<AddProtection products={products} />}
        />
        <Route
          path="/certificate"
          element={<Certificate products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
