import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white" href="#">{props.logoButton}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
  <a className="nav-link text-secondary" href="#">{props.firstButton}</a>
          </li>
          <li className="nav-item">
  <a className="nav-link text-secondary" href="#">{props.secondButton}</a>
          </li>
          <li className="nav-item">
  <a className="nav-link text-secondary" href="#">{props.thirdButton}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
