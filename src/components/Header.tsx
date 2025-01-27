import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">
        <a href="/">
          <img src={logo} alt="header-logo-image" />
        </a>
      </h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <a href="#about">About</a>
          </li>
          <li className="header-nav-item">
            <a href="#bicycle">Bicycle</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
