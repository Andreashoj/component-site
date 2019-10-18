import React from "react";
import Logo from "../images/react-logo.svg";

const Navbar = () => {
  return (
    <nav className="site-nav">
      <div className="site-nav-content">
        <div>
          <img className="site-logo" src={Logo} alt="React-logo" />
        </div>
        <a className="site-nav-link" href="#"></a>
      </div>
    </nav>
  );
};

export default Navbar;
