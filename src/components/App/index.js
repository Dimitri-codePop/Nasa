// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.css';

import Home from 'src/components/Home';
import NavBar from 'src/components/NavBar';
import Mars from 'src/components/Mars';

// == Composant

export default function App() {
  
  return (
    <>
    <h1 className="main_title">Nasa Image</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mars">
          <Mars />
        </Route>
      </Switch>
    </>
  );
}


App.propTypes = {

};
