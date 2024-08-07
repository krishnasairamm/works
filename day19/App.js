/* import logo from './google.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>HELLOOOOOOOOOOOOOOOOOOOOOOOOO</p>
    </div>
  );
}

export default App; */
/* 
import React,{Component} from 'react';

class App extends React.Component{
  render(){
    return (
    <div>
      <First/>
      <Second/>
    </div>
    );
  }
}

class First extends React.Component{
  render(){
    return(
    <div>
      <h1>This is First Class</h1>
    </div>
    );
  }
}


class Second extends React.Component{
  render(){
    return(
      <div>
        <h1>This is Second Class</h1>
        <p>Heyyyyyyyyyy!!!!!!!!!!!!</p>
      </div>
    );
  }
}



export default App;  */

import React,{Component} from "react";
import image from './apple.webp';
import video from './video1.mp4';
import audio from './video1.mp4';
class Fruits extends React.Component{
  render(){
    return(
      <div className="mycontainer">
        <Apple/>
        <Banana/>
        <Pineapple/>
        <Grapes/>
      </div>
    );
  }
}

class Apple extends React.Component{
  render(){
    return(
      <div>
        <img src={image}/>
      </div>
    );
  }
}

class Banana extends React.Component{
  render(){
    return(
      <div>
        <video  src={video} controls>
        </video>
      </div>
    );
  }
}

class Pineapple extends React.Component{
  render(){
    return(
      <div>
        <audio src={audio} controls>
        
        </audio>
      </div>
    );
  }
}

class Grapes extends React.Component{
  render(){
    return(
      <div>
        <form>
          <h1>LOGIN</h1>
          <input type="username"/>
          <input type="password"/>
        </form>
      </div>
    );
  }
}

export default Fruits;