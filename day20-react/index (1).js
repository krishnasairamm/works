import React from 'react';
import Balaji from 'react-dom/client';
//import './index.css';
//import Garage from './Apple.js';
//import Fruits from './App';
//import reportWebVitals from './reportWebVitals';
/*
const root = Balaji.createRoot(document.getElementById('root'));
root.render(<Fruits />);*/
//root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


/*
function Mango() {
  var myStyle = {  
         fontSize: 100,  
         fontFamily: 'Courier',  
         color: '#003300'  
      }  
  return <h1 style = {myStyle}>Welcomes to mango citys!</h1>;
}

const container = document.getElementById("root");
const root = Balaji.createRoot(container);
root.render(<Mango />);
*/

/*

const myelement = (
  <table >
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Address</th>
    </tr>
    <tr>
      <td>Mango</td>
      <td>20</td>
      <td>Salem</td>
    </tr>
    <tr>
      <td>Pineapple</td>
      <td>30</td>
      <td>Ooty</td>
    </tr>
  </table>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(myelement);
*/

/*
const myElement = <h1>React is {15 + 5} times better with JSX</h1>
const container = document.getElementById("root");
const balaji = ReactDOM.createRoot(container);

balaji.render(myElement);
*/
/*
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/
/*
const myElement = <h1 className="myclass">Welcome to SALEM city</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/
/*
const x = 150;

const myElement = <h1 className="myclass">{(x) < 100 ? "Google" : "Yahoo"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/

/*
const x = 50;
let text = "Google engine";
if (x < 100) {
  text = "Yahoo engine";
}

const myElement = <h1 className="myclass">{text}</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Garage />);


const fruitList = ['Apple', 'Bananas', 'Grapes', 'Pineapple'];   
const listItems = fruitList.map((myList)=>{   
    return <li>{myList}</li>;   
});   
   
const root = Balaji.createRoot(document.getElementById('root'));
root.render(<ol type="I"> {listItems} </ol>);

