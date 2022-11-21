import Nav from './Nav';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
