import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid">
          <h1>
            <Link style={{ fontSize: '32px', paddingLeft: '12px' }} className="navbar-brand text-success" to="/">
              ShopShoes
            </Link>
          </h1>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-[red]" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
