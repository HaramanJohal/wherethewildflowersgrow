import React from "react"
import { Link } from "gatsby"


export default function Header() {
  return (
    <div>
      <Link to="/about/">About</Link>
      <Link to="/plants/">Plants</Link>
      <Link to="/resources/">Resources</Link>
    </div>
  )
}