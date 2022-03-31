import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { navLink, navLinks } from './header.module.css'

export default function Header() {
  return (
    <div style={{paddingBottom: "60px"}}>
      <StaticImage src="../data/Header.jpg" alt="Where the wildflowers grow"/>
      <nav>
        <ul className={navLinks}>
          <li><Link className={navLink} to="/about/">About</Link></li>
          <li><Link className={navLink} to="/plants/">Plants</Link></li>
          <li><Link className={navLink} to="/resources/">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}