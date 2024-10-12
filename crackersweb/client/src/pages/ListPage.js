import React from 'react';
import products from '../pages/Products';

const ListPage = ({ updateQuantities, quantities }) => {
  
  const handleChange = (id, value) => {
    updateQuantities(id, value); 
  };

  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      {uniqueCategories.map((category) => (
        <div key={category} className="crac-category">
          <div className="crac-catg-head">
            <h1>{category}( 80 % Discount )</h1>
          </div>

          <table className="crac-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Actual Price</th>
                <th>Discounted Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <tr key={product.id} className="crac-row">
                    <td>{product.id}</td>
                    <td>
                      <img src={product.image} alt={product.title} className="crac-img" />
                    </td>
                    <td>{product.title}</td>
                    <td>
                      <s>
                        <span>₹</span> {product.actualPrice} / 1 Pkt 5 Pcs
                      </s>
                    </td>
                    <td>
                      <span>₹</span> {product.discountedPrice} / 1 Pkt 5 Pcs
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={quantities[product.id] || ''} 
                        onChange={(e) => handleChange(product.id, e.target.value)} 
                        placeholder="Qty"
                      />
                    </td>
                    <td>
                      ₹{(product.discountedPrice * (quantities[product.id] || 0)).toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
