import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { navLinks, headerContainer } from './header.module.css'

export default function Header() {
  return (
    <div className={headerContainer}>
      <StaticImage src="../data/header_wide.jpg" alt="Where the wildflowers grow"/>
      <nav>
        <ul className={navLinks}>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/plants/">Plants</Link></li>
          <li><Link to="/resources/">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}