import React, { Component } from "react";
import { Link } from "gatsby";

export default class Header extends Component {
  render({ siteTitle }) {
    return (
      <header>
        <div>
          <h1>
            <Link to="/">{siteTitle}</Link>
            <Link to="/about">about</Link>
          </h1>
        </div>
      </header>
    );
  }
}
