import React, { useState, useEffect } from 'react';
import ControlledCarousel from '../pages/Carousel';
import Gridpage from '../pages/Gridview';
import ListPage from '../pages/ListPage';
import products from './Products';

const Quickpage = ({ setTotalQuantity, setOverallTotal }) => {
  const [quantities, setQuantities] = useState({});
  const [isGridClicked, setIsGridClicked] = useState(true);
  const [isListClicked, setIsListClicked] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);

  const resetAllStates = () => {
    setIsGridClicked(false);
    setIsListClicked(false);
    setShowGrid(false);
    setShowList(false);
  };

  const handleGridClick = () => {
    resetAllStates();
    setShowGrid(true);
    setIsGridClicked(true);
  };

  const handleListClick = () => {
    resetAllStates();
    setShowList(true);
    setIsListClicked(true);
  };

  // Function to update quantities
  const updateQuantities = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: parseInt(value, 10) || 0 }));
  };


  const totalQuantity = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);

  const overallTotal = products.reduce((total, product) => {
    const quantity = quantities[product.id] || 0;
    return total + product.discountedPrice * quantity;
  }, 0);

  const totalSavings = products.reduce((total, product) => {
    const quantity = quantities[product.id] || 0;
    const savingsPerItem = product.actualPrice - product.discountedPrice;
    return total + savingsPerItem * quantity;
  }, 0);


  useEffect(() => {
    setTotalQuantity(totalQuantity); 
    if (setOverallTotal) {
      setOverallTotal(overallTotal); 
    }
  }, [totalQuantity, overallTotal, setTotalQuantity, setOverallTotal]);

  return (
    <div>
      <div><ControlledCarousel /></div>
      <div className="tags-div">
        <div>
          <i className="fa-solid fa-tag" id="dis-tag"></i>
          <div id="tag-data">
            <h3>Discount Crackers</h3>
            <p>Highest Discount at low price</p>
          </div>
        </div>
        <div>
          <i className="fa-regular fa-gem" id="gem-tag"></i>
          <div id="tag-data">
            <h3>Wholesale Price</h3>
            <p>Our crackers are safe to use.</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-wand-magic-sparkles" id="wand-tag"></i>
          <div id="tag-data">
            <h3>Best Quality</h3>
            <p>100% superior quality crackers</p>
          </div>
        </div>
      </div>

      <div className="view-buttons">
        <button id="grid-button" className={isGridClicked ? 'clicked' : ''} onClick={handleGridClick}>
          <i className="fa-solid fa-list"></i> Grid view
        </button>
        <button id="list-button" className={isListClicked ? 'clicked' : ''} onClick={handleListClick}>
          <i className="fa-solid fa-table-cells"></i> List view
        </button>
      </div>

      <div className="count-display">
        <label>Products:</label><input type="number" disabled value={totalQuantity} />
        <label>You save:</label><input type="number" disabled value={totalSavings.toFixed(2)} />
        <label>Overall total:</label><input type="number" disabled value={overallTotal.toFixed(2)} />
      </div>

      <div>
        {showGrid && <Gridpage updateQuantities={updateQuantities} quantities={quantities} />}
        {showList && <ListPage updateQuantities={updateQuantities} quantities={quantities} />}
      </div>
    </div>
  );
};

export default Quickpage;
