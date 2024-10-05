import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="#">
          Dashboard
        </a>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </nav>
    </>
  );
}

export default Navbar;
