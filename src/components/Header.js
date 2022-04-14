import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="">
    <nav className="d-flex justify-content-between m-4 border-bottom">
      <div className="d-flex justify-content-between align-items-center gap-3 mb-2">
        <img src="" alt="Logo" />
        <h1 className="header">Air Pollution</h1>
      </div>
      <div>
        <ul className="list-unstyled d-flex justify-content-evenly m-4">
          {' '}
          <li>
            {' '}
            <NavLink to="/" activeclassname="active-link" className="link m-2">Country</NavLink>
            {' '}
          </li>
          {' '}
          <li>
            {' '}
            <NavLink to="/pollution" activeclassname="active-link" className="link m-2">Pollution</NavLink>
            {' '}
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
