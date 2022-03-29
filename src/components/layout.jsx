import React from "react"
import Footer from "./footer"
import Header from "./header"

import { container } from './layout.module.css'

export default function Layout(props) {
  return (
    <div className={container}>
      <body>
        <header>
          <Header/>
        </header>
        {props.children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </div>
  )
}