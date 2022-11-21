import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
    </nav>
  );
}

export default Navbar;
