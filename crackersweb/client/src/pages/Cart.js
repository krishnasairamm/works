import React, { useState } from 'react';
import axios from 'axios'; 


const Sidebar = ({ totalQuantity, overallTotal }) => {
  const [isOpen, setIsOpen] = useState(false);


  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');

  const packingCharges = 0; 
  const minimumAmount = 1000; 
  
  const totalAmount = overallTotal + packingCharges;

  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (totalAmount >= minimumAmount) {
      try {
        // Send POST request to the backend
        const response = await axios.post('http://localhost:5000/api/cart', {
          name,
          mobile,
          address,
          email,
          state,
          totalAmount,
        });
        alert(response.data.message);
      } catch (error) {
        alert('Error submitting order: ' + error.message); 
      }
    } else {
      alert(`Total must be at least ₹${minimumAmount}`); 
    }
  };

  return (
    <div>
      
      <div className='cart-button-container'>
        <button className="cart-button" onClick={toggleSidebar}>
          <i className="fa-solid fa-cart-shopping"></i>
          {totalQuantity > 0 && <span className="notification-badge">{totalQuantity}</span>} {/* Notification badge */}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          &times; {/* Close button */}
        </button>

        <h2>Shopping Cart</h2>
        <form onSubmit={handleSubmit}>
          <div className="sidebar-form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="sidebar-input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="sidebar-form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              className="sidebar-input"
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="sidebar-form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              className="sidebar-input"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="sidebar-form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="sidebar-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="sidebar-form-group">
            <label htmlFor="state">State:</label>
            <input
              className="sidebar-input"
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>

          <div className="sidebar-form-group">
            <label>Total:</label>
            <input
              className="sidebar-input"
              type="number"
              value={overallTotal.toFixed(2)}
              disabled
            />
          </div>

          <div className="sidebar-form-group">
            <label>Packing Charges (0%):</label>
            <input
              className="sidebar-input"
              type="number"
              value={packingCharges}
              disabled
            />
          </div>

          <div className="sidebar-form-group">
            <label>Total Amount:</label>
            <input
              className="sidebar-input"
              type="number"
              value={totalAmount.toFixed(2)}
              disabled
            />
          </div>

          <p>Minimum amount: ₹{minimumAmount}</p>

          <button type="submit" disabled={totalAmount < minimumAmount}>
            Submit Order
          </button>
        </form>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
