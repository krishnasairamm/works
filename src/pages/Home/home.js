import React from "react";
import "./home.css";
//import Navbar from "../components/Navbar/Navbar";
//import Footer from "../components/Footer/footer";
import Carousel from "react-bootstrap/Carousel";
// import Productpage from "../products/product";

const Home = () => {
  

  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="First slide" // Bootstrap classes
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
            className="d-block w-100" // Bootstrap classes
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
            className="d-block w-100" // Bootstrap classes
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      <div className="content-2">
      <div className="content-2-img1">
        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f49153ce-af1c-4b22-804b-a535fcede409/NIKE+CORTEZ+TXT.png" 
        alt="Tatum 2PF"
        />
      </div>
      <div content="content-2-img2">
        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/421e785f-5705-4761-9195-8c45f8e72f68/NIKE+CORTEZ+TXT.png" 
        alt="Tatu"
        />
        
      </div>
      
      </div>

      
    </>
  );
};

export default Home;
