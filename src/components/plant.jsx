import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { plantImage, plantLabel } from './plant.module.css'

export default function Plant(props) {
  return (
    <div>
      <GatsbyImage
        image={getImage(props.relativeImagePath)}
        alt="alt text"
        className={plantImage}
      />
      <div className={plantLabel}>
        <p>{props.commonName}</p>
        <p style={{fontStyle: 'italic'}}>{props.latinName}</p>
      </div>
    </div>
  )
}