import React, { useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { plantImage, plantLabel, modal, modalPlantImage} from './plant.module.css'

export default function Plant(props) {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleDialog = () => {
    setModalVisible(!modalVisible)
  };

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
        onClick={toggleDialog}
      />
      <div className={plantLabel}>
        <p>{props.commonName}</p>
        <p style={{fontStyle: 'italic'}}>{props.latinName}</p>
        {copyright}
      </div>
      {modalVisible && (
        <dialog
          className={modal}
          open
          onClick={toggleDialog}
        >
          <GatsbyImage
            image={image}
            alt="alt text"
            className={modalPlantImage}
            onClick={toggleDialog}
          />
        </dialog>
      )}
    </div>
  )
}
