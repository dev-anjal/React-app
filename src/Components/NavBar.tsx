// import React from "react";
import {} from "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Home_page_nav">
      <div className="links">
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/About">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/ListGroup">ListGroup</Link>
      </div>
      <h2>NavBar</h2>
    </div>
  );
};

export default NavBar;
