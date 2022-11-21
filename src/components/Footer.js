import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="Kasa" className="logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
