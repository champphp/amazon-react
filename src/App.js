import './App.css';

import Header from './Header/Header'
import Home from './Home/Home'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <p>Page Checkout</p>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
