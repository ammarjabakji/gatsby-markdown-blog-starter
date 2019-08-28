<<<<<<< HEAD
import React, { Component } from "react"
import { Link } from "gatsby"
import config from "../../data/SiteConfig"
=======
import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
>>>>>>> b1

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>
<<<<<<< HEAD
            <Link to="/"> {config.siteTitle} </Link>     
          </h1>
          <Link to="/about">About | </Link>
=======
            <Link to="/">{config.siteTitle}</Link>

          </h1>
          <Link to="/about">About| </Link>
>>>>>>> b1
          <Link to="/contact">Contact</Link>
        </div>
      </header>
    );
  }
}
