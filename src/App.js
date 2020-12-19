import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Header from './Header/Header'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import Footer from './Footer/Footer'
import Payment from './Payment/Payment'

import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import data from './APIKey'

const promise = loadStripe(data.apiKeyStripe)

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the User is >>>", authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer />
        </Route>
        <Route path="/orders">
          <Header />
          <h1>Orders Page</h1>
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
