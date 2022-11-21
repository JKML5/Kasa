import PropTypes from 'prop-types';

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      {range.map((rangeElem) =>
        value >= rangeElem ? <span key={rangeElem.toString()}>⭐</span> : null
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
