// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.css';
import Loading from './Loading';
import Home from 'src/components/Home';
import NavBar from 'src/components/NavBar';
import Mars from 'src/components/Mars';

// == Composant

export default function App({loading}) {
  
  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <h1>Nasa Image</h1>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mars">
          <Mars />
        </Route>
      </Switch>
    </div>
    </>
  );
}


App.propTypes = {

};
