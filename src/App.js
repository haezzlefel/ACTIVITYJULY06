import React from 'react';
import {Route, Switch}from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {
  return (
      <Switch>
        <Route exact path="Login">
          <Login />
        </Route>
        <Route exact path="Signup">
          <Signup />
        </Route>
      </Switch>
    );
}

export default App;
