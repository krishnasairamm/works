import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-div">
            <div className="nav-logo">
                <Link to="/home" className="nav-h1"><h1>The Sneaker Spot</h1></Link><button></button>
            </div>
            
            <div className="nav-content">
                <Link to="/home"><button>Home</button></Link>
                <Link to="/products"><button>Products</button></Link>
                <button>Contact</button>
                <button>About</button>
            </div>
        </div>
    );
}

export default Navbar;
