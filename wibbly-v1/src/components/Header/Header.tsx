import './Header.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  return (
    <header className="header">
      <HeaderLogo></HeaderLogo>
      <HeaderNav></HeaderNav>
    </header>
  );
}

export default Header;
