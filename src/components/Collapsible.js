import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Collapsible.css';

function Collapsible({ title, description }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const properDesc = description.split('###').map((value) => (
    <>
      {value}
      <br />
    </>
  ));

  return (
    <div className="collapsible-section">
      <button
        type="button"
        className={open ? 'collapsible opened' : 'collapsible'}
        onClick={toggle}
      >
        {title}
      </button>
      {open && <div className="collapsible-content">{properDesc}</div>}
    </div>
  );
}

Collapsible.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Collapsible.defaultProps = {
  title: null,
  description: null,
};

export default Collapsible;
