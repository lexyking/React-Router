import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Upcoming from './components/Upcoming'
import Stores from './components/Stores'
import StoreDetails from './components/StoreDetails'
import Home from './components/Home'
import ItemDetails from './components/ItemsDetails'
import Weapons from './components/Weapons'
// import WeaponsDetails from './components/WeaponsDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Upcoming" exact component={Upcoming} />
          <Route path="/Upcoming/:id" component={ItemDetails} />
          <Route path="/Stores" exact component={Stores} />
          <Route path="/Stores/:id" component={StoreDetails} />
          <Route path="/Weapons" exact component={Weapons} />
          {/* <Route path="/Weapons/:id" component={WeaponsDetails} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
