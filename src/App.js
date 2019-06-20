import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Shop from './components/Shop'
import Artist from './components/Artists'
import Home from './components/Home'
import ItemDetails from './components/ItemsDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Artist" component={Artist} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
