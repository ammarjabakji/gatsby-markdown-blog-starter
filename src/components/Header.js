import React from 'react'
import { Link } from 'gatsby'
import config from '../../data/SiteConfig'
import Categories from './Categories'
import styles from './Header.module.scss'

const Header = () => (
  <header>
    <h1>
      <Link to="/" activeClassName={styles.activeNav}>
        {config.siteTitle}
      </Link>
    </h1>
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <Link to="/about" activeClassName={styles.activeNav}>
            About
          </Link>
        </li>
        <Categories activeClassName={styles.activeNav} />
        <li>
          <Link to="/contact" activeClassName={styles.activeNav}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
