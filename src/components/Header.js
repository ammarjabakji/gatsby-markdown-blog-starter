import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import styles from "./Header.module.scss"

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>
            <Link to="/">{config.siteTitle}</Link>
          </h1>

          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
          
        </div>
      </header>
    );
  }
}
