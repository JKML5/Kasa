import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Accueil
      </NavLink>

      <NavLink
        to="a-propos"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        A propos
      </NavLink>
    </nav>
  );
}

export default Navbar;
