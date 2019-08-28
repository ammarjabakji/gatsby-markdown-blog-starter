import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>
            <Link to="/">{config.siteTitle}</Link>

          </h1>
          <Link to="/about">About| </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
    );
  }
}
