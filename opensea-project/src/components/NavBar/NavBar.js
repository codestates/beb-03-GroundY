import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/tokenlist">
        <button>TokenList</button>
      </Link>
      <Link to="/mint">
        <button>Mint</button>
      </Link>
    </div>
  );
};

export default NavBar;
