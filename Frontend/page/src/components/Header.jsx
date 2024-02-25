import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Electricity Corp.</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/login"}>Login</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/reviews"}>Reviews</Link>
      </main>
    </nav>
  );
};

export default Header;