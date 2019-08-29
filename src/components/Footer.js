import React, { Component } from "react";
import styles from "./Footer.module.scss";
import config from "../../data/SiteConfig";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.container}>
          <div>
            <a
              href="https://twitter.com/xx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/xx"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={config.siteUrl + config.siteRss}
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
          </div>
          <div>{config.copyright}</div>
        </div>
      </footer>
    );
  }
}
