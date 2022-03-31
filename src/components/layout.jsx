import React from "react"
import Footer from "./footer"
import Header from "./header"

import { container } from './layout.module.css'

export default function Layout(props) {
  console.log(
    "Instagram icons created by Freepik - Flaticon\nTwitter icons created by Retinaicons - Flaticon\nWebsite icons created by LAFS - Flaticon"
  )
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