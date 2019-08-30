import React from 'react'
import { Link } from "gatsby";
import config from '../../data/SiteConfig';
import Categories from './Categories'
import styles from './Header.module.scss'

const Header = () => {
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
  )
}

export default Header