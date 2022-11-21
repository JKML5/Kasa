import Navbar from './Navbar';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="logo" />
      <Navbar />
    </header>
  );
}

export default Header;
