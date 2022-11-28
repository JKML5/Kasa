import '../styles/RentalItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Rental({ id, title, imgSrc }) {
  return (
    <div className="rental">
      <Link to={`/location/${id}`}>
        <img src={imgSrc} alt="" />
        <div className="rental-inside">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

Rental.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};

Rental.defaultProps = {
  id: null,
  title: null,
  imgSrc: null,
};

export default Rental;
