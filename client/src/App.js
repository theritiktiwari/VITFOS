import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodItems from './Components/FoodItems';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ItemState from './Context/ItemState';

function App() {
  const title = "VITFOS";
  return (
    <>
      <ItemState>
        <Router>
          <Navbar title={title} />
          <Switch>
            <Route exact path="/">
              <Home title={title} />
              <Footer title={title} />
            </Route>
            <Route exact path="/items">
              <FoodItems />
              <Footer title={title} />
            </Route>
          </Switch>
        </Router>
      </ItemState>
    </>
  );
}

export default App;
