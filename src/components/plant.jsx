import React from "react"

export default function Plant(props) {
  return (
    <>
      <img width="25%" src={props.src} />
      <p>{props.commonName}</p>
      <p style={{fontStyle: 'italic'}}>{props.latinName}</p>
    </>
  )
}