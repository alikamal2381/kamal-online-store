import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "./data";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="grid-container">
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/ProductDetail/:id" component={ProductDetail} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
