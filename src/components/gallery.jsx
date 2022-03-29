import React from "react"

import { gallery } from './gallery.module.css'

export default function Plant(props) {
  return (
    <div className={gallery}>
      {props.children}
    </div>
  )
}