import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";

class Header extends Component {
  render() {
    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
    };

    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open");
    };

    return (
      <div>
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Kamal Shoe Store</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a> {" | "}
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Shirt</a>
            </li>

            <li>
              <a href="index.html">Paint</a>
            </li>

            <li>
              <a href="index.html">Shoe</a>
            </li>
          </ul>

          <h3>Pages</h3>
          <ul>
            <li>
              <Link to="/" exact>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Header;
