import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodItems from "./Components/FoodItems";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ItemState from "./Context/ItemState";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  //   Check user login or not
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const title = "VITFOS";
  return (
    <>
      <ItemState>
        <Router>
          <Navbar title={title} user={user} />
          <Switch>
            <Route exact path="/">
              <Home title={title} />
              <Footer title={title} />
            </Route>
            <Route exact path="/items">
              <FoodItems user={user} />
              <Footer title={title} />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile user={user} />
            </Route>
          </Switch>
        </Router>
      </ItemState>
    </>
  );
}

export default App;
