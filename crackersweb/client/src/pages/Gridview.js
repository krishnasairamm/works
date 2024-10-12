import React from 'react';
import products from './Products';

const Gridpage = ({ updateQuantities, quantities }) => {

  
  const handleChange = (id, value) => {
    updateQuantities(id, value); 
  };

  // Get unique categories
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      {uniqueCategories.map((category) => (
        <div key={category} className="crac-category">
          <div className="crac-catg-head">
            <h1>{category}( 80 % Discount )</h1>
          </div>

          <div className="crac-card-view">
            {products
              .filter(product => product.category === category)
              .map((product) => (
                <div key={product.id} className="crac-card">
                  <div className="crac-img-div">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="crac-sno">
                    <p>{product.id}</p>
                  </div>
                  <p className="crac-title">{product.title}</p>
                  <div className="crac-prices">
                    <p id='crac-act-price'>
                      <s><span>₹</span> {product.actualPrice} / 1 Pkt 5 Pcs</s>
                    </p>
                    <p id='crac-disc-price'>
                      <span>₹</span> {product.discountedPrice} / 1 Pkt 5 Pcs
                    </p>
                  </div>
                  <div className="crac-inp-field">
                    <input
                      type="number"
                      min="0"
                      value={quantities[product.id] || ''} 
                      onChange={(e) => handleChange(product.id, e.target.value)}
                      placeholder="Qty"
                    />
                  </div>
                  <div className='crac-total-field'>
                    <p>₹{(product.discountedPrice * (quantities[product.id] || 0)).toFixed(2)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gridpage;
