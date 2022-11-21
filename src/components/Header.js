import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="logo" />
      </Link>

      <Navbar />
    </header>
  );
}

export default Header;
