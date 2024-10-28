import React from "react";
import { useState } from "react";
import "./product.css";
import { products } from "./items";

const Productpage = () =>{
    

    const [quantities, setQuantities] = useState({});

  const increment = (index) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: (prevQuantities[index] || 0) + 1,
    }));
  };

  const decrement = (index) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: prevQuantities[index] > 0 ? prevQuantities[index] - 1 : 0,
    }));
  };

    return(
        <>
        <div className="product-items">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>Price: {product.price} ₹</p>

              {/* Quantity Input */}
              <input type="number" value={quantities[index] || 0} readOnly />

              {/* Increment/Decrement buttons */}
              <div className="quantity-controls">
                <button onClick={() => decrement(index)}>-</button>
                <button onClick={() => increment(index)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}

export default Productpage;