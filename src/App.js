import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Homepage from "./containers/homepage";
import About from "./containers/about";
import Blog from "./containers/blog";
import Customize from "./containers/customize";
import Specs from "./containers/specs";
import Buy from "./containers/buy";
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <AnimatePresence>
          <Switch>
            <Route strict path="/about">
              <About />
            </Route>
            <Route strict path="/blog">
              <Blog />
            </Route>
            <Route strict path="/customize">
              <Customize />
            </Route>
            <Route strict path="/specs">
              <Specs />
            </Route>
            <Route path="/buy/:id/:price">
              <Buy />
            </Route>
            <Route strict path="/">
              <Homepage />
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
