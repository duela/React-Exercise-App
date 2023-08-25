import React from "react";
// The <Outlet> renders the current route selected
// <Link> is used to set the URL and keep track of browsing history. Anytime we link to an internal path, we will use <Link> instead of <a href="">
import { Outlet, Link } from "react-router-dom";

function NoPage() {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
        <p class="lead">
          The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
      <Outlet />
    </div>

  )
}
export default NoPage;
