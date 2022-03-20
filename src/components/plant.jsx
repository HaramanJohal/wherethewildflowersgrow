import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Plant(props) {
  return (
    <>
      <GatsbyImage
        image={getImage(props.relativeImagePath)}
        alt="alt text"
      />
      <p>{props.commonName}</p>
      <p style={{fontStyle: 'italic'}}>{props.latinName}</p>
    </>
  )
}