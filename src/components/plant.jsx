import React, { useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { plantImage, plantLabel, modalPlantImage, modalMain, displayBlock, displayNone} from './plant.module.css'

export default function Plant(props) {
  const [show, setShow] = useState(false)

  const showHideClassName = show ? displayBlock : displayNone;

  let copyright = null
  if (props.copyrightName !== "") {
    copyright = <p>© {props.copyrightName}</p>
  }
  let image = getImage(props.relativeImagePath)

  return (
    <div>
      <GatsbyImage
        image={image}
        alt="alt text"
        className={plantImage}
        onClick={() => setShow(true)}
      />
      <div className={plantLabel}>
        <p>{props.commonName}</p>
        <p style={{fontStyle: 'italic'}}>{props.latinName}</p>
        {copyright}
      </div>
      <div className={showHideClassName} onClick={() => setShow(false)}>
        <div className={modalMain}>
          {/* <p>hi</p> */}
          <GatsbyImage
            image={image}
            alt="alt text"
            className={modalPlantImage}
          />
        </div>
      </div>
    </div>
  )
}
