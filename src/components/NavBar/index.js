import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import './styles.css';

import PropTypes from 'prop-types';

export default function NavBar() {
  return (
    <nav className="navbar__web">
      <>
        <Link
          to="/"
          key="Accueil"
          className=""
        >
          <h1 className="navbar__web__title">
            <span> Nasa </span>
          </h1>
        </Link>
        <div className="a">
          <Link to="/mars">
            <button type="button" className="a">Mars en Rover</button>
          </Link>
        </div>
      </>
    </nav>
  )
}

NavBar.propTypes = {

};
