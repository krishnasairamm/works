import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../components/slide1.jpg';
import slide2 from '../components/slide2.avif';
import slide3 from '../components/slide3.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-div'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img src={slide1} alt="First slide" className="d-block" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide2} alt="Second slide" className="d-block" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide3} alt="Third slide" className="d-block" />
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default ControlledCarousel;
