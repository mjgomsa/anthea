// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.js"; // Import Navigation component
import { Home } from "./components/Home.js"; // Import Home component
import { Gallery } from "./components/Gallery.js"; // Import Gallery component
import ProductPage from "./components/ProductPage.js"; // Import ProductPage component
// // import ARComp from "./components/ARComp.js";
// Import your products dataset
import { products } from "./Data";

// // function App() {
// //   return (
// //     <div>
// //       <ARComp />
// //     </div>
// //   );
// // }

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
