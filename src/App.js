import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Shop from './components/Shop'
import Artist from './components/Artists'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/Shop" component={Shop} />
        <Route path="/Artist" component={Artist} />
      </div>
    </Router>
  );
}

export default App;
