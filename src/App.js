import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import Shop from "./Components/Shop/Shop"
import Header from "./Components/Header/Header"
import Cart from "./Components/Cart/Cart"
import SingleItem from "./Components/SingleItem/SingleItem"


function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          
          <Route exact path="/" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem}/>
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
