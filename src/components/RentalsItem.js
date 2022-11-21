import PropTypes from 'prop-types';
import Rating from './Rating';

function RentalsItem({ title, rating }) {
  return (
    <div className="card rental">
      <p>{title}!</p>
      <Rating value={rating} />
    </div>
  );
}

RentalsItem.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
};

RentalsItem.defaultProps = {
  title: null,
  rating: null,
};

export default RentalsItem;
