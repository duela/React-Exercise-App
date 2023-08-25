import React from "react";
// The <Outlet> renders the current route selected
// <Link> is used to set the URL and keep track of browsing history. Anytime we link to an internal path, we will use <Link> instead of <a href="">
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    // Bootstrap styling documentation 
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">   
          <Link to="/" className="navbar-brand">ExcerTracker </Link>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav mr-auto ">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Excercises </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create-Excercise-Log </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">Create-User  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
export default Navbar;
