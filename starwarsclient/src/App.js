import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Homepage, Component404} from './components/index';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route component={Component404} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
