import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { navLink, navLinks, dropdown, dropbtn, dropdownContent } from './header.module.css'

export default function Header() {
  const chapters = [...Array(20).keys()].map(
    index => <Link to={`/chapters/${index + 1}`}>Chapter {index + 1}</Link>
  )
  return (
    <div style={{paddingBottom: "60px"}}>
      <StaticImage src="../data/Header.jpg" alt="Where the wildflowers grow"/>
      <nav>
        <ul className={navLinks}>
          <li><Link className={navLink} to="/">About</Link></li>
          <li>
            <div class={dropdown}>
              <button class={dropbtn}>Plants</button>
              <div class={dropdownContent}>
                {chapters}
              </div>
            </div>
          </li>
          <li><Link className={navLink} to="/resources/">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}