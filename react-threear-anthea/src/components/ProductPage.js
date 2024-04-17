// ProductPage.js
import React from "react";

function ProductPage({ product }) {
  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <div>
          <p>Designer: {product.designer}</p>
          <p>Materials: {product.materials.join(", ")}</p>
          <p>Value: ${product.value.toFixed(2)}</p>
          <p>Sales: {product.sales}</p>
          <p>Launch Date: {product.launch.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
