import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import Categories from "./Categories"
import styles from "./Header.module.scss"

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="/">{config.siteTitle}</Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <Categories />
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>   
        </nav>
       
      </header>
    );
  }
}
