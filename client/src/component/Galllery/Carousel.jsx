import React, { useState } from "react";
import "./Gallery.css";
const Carousel = (props) => {
  const goToNextSlide = () => {
    if (currentIndex === props.slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const max = props.slides.length;
  setTimeout(() => {
    if (currentIndex == max - 1) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, 5000);
  const renderSlide = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.slides[currentIndex]} <span>{props.Texts[currentIndex]}</span>
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div className="carousel-container">{renderSlide()}</div>

      <div className="button-gallery-all">
        <button className="prev-button" onClick={goToPrevSlide}>
          &#8249;&#8249;Prev
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          Next&#8250;&#8250;
        </button>
      </div>
    </div>
  );
};
export default Carousel;
