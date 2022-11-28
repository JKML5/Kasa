import PropTypes from 'prop-types';
import '../styles/Host.css';

function Host({ name, picture }) {
  const properName = name.split(' ').map((value) => (
    <>
      {value}
      <br />
    </>
  ));

  return (
    <div className="host">
      <div>{properName}</div>
      <img src={picture} alt="" />
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
};

Host.defaultProps = {
  name: null,
  picture: null,
};

export default Host;
