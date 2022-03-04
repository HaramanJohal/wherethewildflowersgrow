import React from "react"
import Plant from "./plant"

export default function Plants(props) {
  console.log(props)
  let plants = props.chapter.plants.map((node) => {
    // let description = plantData["allChapter1Json"]["edges"].filter((edge) => edge["node"]["commonName"] == node["name"].replace("_", " "))[0]["node"]
    // return <p>{node["commonName"]}</p>
    return (<Plant src={`../data/plant_images/${node["imageName"]}`} commonName={node["commonName"]} latinName={node["latinName"]} />)
  })
  
  return (
    <>
      <p>{plants}</p>
      {/* <img width="25%" src={props.src} />
      <p>{props.commonName}</p>
      <p style={{fontStyle: 'italic'}}>{props.latinName}</p> */}
    </>
  )
}