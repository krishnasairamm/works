import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Link,NavLink, Routes } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './About'  
import Contact from './Contact'  
import Notfound from './notfound'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul>  
      <Routes>  
         <Route exact path="/" component={App} />  
         <Route path="/about" component={About} />  
         <Route path="/contact" component={Contact} />  
         <Route component={Notfound} />  
      </Routes>  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));