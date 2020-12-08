import './App.css';

import Header from './Header/Header'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <h1>Login page</h1>
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
