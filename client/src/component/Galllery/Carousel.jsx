import React, { useState } from 'react';
import './Gallery.css'
const Carousel = (props) => 
{
    const goToNextSlide = () => 
    {
        if (currentIndex === props.slides.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
    }
      const goToPrevSlide = () => 
      {
        if (currentIndex === 0) {
          setCurrentIndex(props.slides.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      } 

      const renderSlide = () => {
        return (
          <div>
            {props.slides[currentIndex]}
          </div>
        )
      }

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div >
      <div className="carousel-container" >
      {renderSlide()}
      </div>
    
      <div><button className="prev-button" onClick={goToPrevSlide}>
    &#8249;&#8249;
          </button>
          <button className="next-button" onClick={goToNextSlide}>
    &#8250;&#8250;
          </button></div>
   
  </div>
  )
}
export default Carousel;