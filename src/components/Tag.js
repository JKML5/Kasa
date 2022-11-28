import PropTypes from 'prop-types';
import '../styles/Tag.css';

function Tag({ value }) {
  return <span className="tag">{value.replaceAll(' ', '\u00a0')}</span>;
}

Tag.propTypes = {
  value: PropTypes.string,
};

Tag.defaultProps = {
  value: null,
};

export default Tag;
