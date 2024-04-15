import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.js";
import { Navigation } from "./components/Navigation.js";
// import { Logout } from "./component/logout";
// import { Profile } from "./component/profile";
// import { ProductPage } from "./component/productPage";
import ARComp from "./components/ARComp.js";
import { products } from "./Data.js";

// function App() {
//   return (
//     <div>
//       <ARComp />
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home {...products} />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile {...user} />} />
        <Route path="/logout" element={<Logout />} />
        {user.products.map((product, index) => (
          <Route
            key={index}
            path={`/product/${product.anid}`}
            element={<ProductPage product={product} />}
          />
        ))} */}
        {/* <Route path="/ar" element={<ARComp />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
