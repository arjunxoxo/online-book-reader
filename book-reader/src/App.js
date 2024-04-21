import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import Header from './components/Header.js';
import browse from './components/browse.js';
import login from './components/LoginPage.js'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/header" exact component={Header} />
          <Route path="/browse" component={browse} />
          <Route path="/login" component={login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
