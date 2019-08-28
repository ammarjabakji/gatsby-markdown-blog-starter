import React, { Component } from "react";
import styles from  './Footer.module.scss'

export default class Footer extends Component {
  
  render() {
    return (
      <footer className={styles.footer}>

        <a href="https://twitter.com/xx" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/xx" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a
          href="https://github.com/xx/xx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    )
  }
}
