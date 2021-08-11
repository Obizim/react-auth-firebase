import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <span className="logo--icon">🤖</span>avgen
        </div>
        <ul className="nav__menu">
          <li className="nav__menu-item">About</li>
          <li className="nav__menu-item">Signup</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
