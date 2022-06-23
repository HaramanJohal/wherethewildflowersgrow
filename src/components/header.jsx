import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { navLink, navLinks, dropdown, dropbtn, dropdownContent, dropdownColumn} from './header.module.css'

export default function Header() {
  const chapters1To5 = [...Array(5).keys()].map(
    index => <Link to={`/chapters/${index + 1}`}>Chapter {index + 1}</Link>
  )
  const chapters6To10 = [...Array(5).keys()].map(
    index => <Link to={`/chapters/${index + 6}`}>Chapter {index + 6}</Link>
  )
  const chapters11To15 = [...Array(5).keys()].map(
    index => <Link to={`/chapters/${index + 11}`}>Chapter {index + 11}</Link>
  )
  const chapters16To20 = [...Array(5).keys()].map(
    index => <Link to={`/chapters/${index + 16}`}>Chapter {index + 16}</Link>
  )
  return (
    <div style={{paddingBottom: "60px"}}>
      <Link className={navLink} to="/">
        <StaticImage src="../data/Header.jpg" alt="Where the wildflowers grow"/>
      </Link>
      <nav>
        <ul className={navLinks}>
          <li><Link className={navLink} to="/">About</Link></li>
          <li><Link className={navLink} to="/resources/">Resources</Link></li>
          <li>
            <div class={dropdown}>
              <button class={dropbtn}>Plants</button>
              <div class={dropdownContent}>
                <div class={dropdownColumn}>
                  {chapters1To5}
                </div>
                <div class={dropdownColumn}>
                  {chapters6To10}
                </div>
                <div class={dropdownColumn}>
                  {chapters11To15}
                </div>
                <div class={dropdownColumn}>
                  {chapters16To20}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}