import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  return (
    <>
      <StaticImage src="../data/header_wide.jpg" alt="Where the wildflowers grow" />
      <div>
        <Link to="/about/">About</Link>
        <Link to="/plants/">Plants</Link>
        <Link to="/resources/">Resources</Link>
      </div>
    </>
  )
}