import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BrowsePage from './components/BrowsePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/browse" component={BrowsePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
