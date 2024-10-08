import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand mx-4">Employee Dashboard</a>
        <Link to="/addEmployee">
          <button className="btn btn-outline-success my-2 my-sm-0 mx-4">
            ADD EMPLOYEE
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
