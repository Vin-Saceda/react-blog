import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
