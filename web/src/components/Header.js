import lateral from "../images/Lateral.png";

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <nav className="header__menu">
          <img className="header__menu--img" src={lateral} alt="Menu" />
        </nav>
      </header>
    </>
  );
};

export default Header;
