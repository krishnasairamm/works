import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-div">
            <div className="nav-logo">
                <h1>The Sneaker Spot</h1>
            </div>
            <div className="nav-content">
                <Link to="/Home"><button>Home</button></Link>
                <button>Products</button>
                <button>About</button>
            </div>
        </div>
    );
}


export default Navbar;