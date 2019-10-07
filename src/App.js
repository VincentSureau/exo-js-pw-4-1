import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Navigation from './components/navbar'
import Exo1 from './components/exo1';
import Exo2 from './components/exo2';
import Exo3 from './components/exo3';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container py-3">
          <Switch>
            <Route path="/exercice-1">
              <Exo1 />
            </Route>
            <Route path="/exercice-2">
              <Exo2 />
            </Route>
            <Route path="/exercice-3">
              <Exo3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
