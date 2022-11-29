import PropTypes from 'prop-types';
import '../styles/Rating.css';

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="ratings">
      {range.map((rangeElem) =>
        value >= rangeElem ? (
          <span key={rangeElem} className="rating" />
        ) : (
          <span key={rangeElem} className="rating inactive" />
        )
      )}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
};

Rating.defaultProps = {
  value: null,
};

export default Rating;
