import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Slider.css';

function Slider({ pictures }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentSlideIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentSlideIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="pagination">
        {currentSlideIndex + 1}/{pictures.length}
      </div>
      <button
        type="button"
        className="slider-prev"
        aria-label="Previous slide"
        onClick={goToPrev}
      />
      <button
        type="button"
        className="slider-next"
        aria-label="Next slide"
        onClick={goToNext}
      />
      <img className="slide" src={pictures[currentSlideIndex]} alt="" />
    </div>
  );
}

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

Slider.defaultProps = {
  pictures: null,
};

export default Slider;
