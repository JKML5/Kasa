import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Collapsible.css';

function cleanDescription(description) {
  const array = description.split('###');

  if (array.length > 1) {
    return array.map((value) => `${value}\n`);
  }
  return description;
}

function Collapsible({ title, description }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapsible-section">
      <button
        type="button"
        className={open ? 'collapsible opened' : 'collapsible'}
        onClick={toggle}
      >
        {title}
      </button>
      {open && (
        <div className="collapsible-content">
          {cleanDescription(description)}
        </div>
      )}
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
