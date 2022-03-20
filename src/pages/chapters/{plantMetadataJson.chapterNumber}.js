import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import Plant from "../../components/plant"

export default function Chapter({ data, pageContext }) {
  console.log(data)
  console.log(pageContext)
  const images = data.allPlantMetadataJson.nodes[0].plants.map(
    plant => <Plant relativeImagePath={plant.relativeImagePath} commonName={plant.commonName} latinName={plant.latinName} />
  )
  return(
    <Layout>
      <p>Hello, I am chapter {data.allPlantMetadataJson.nodes[0].chapterNumber}</p>
      {images}
    </Layout>
  )
}

export const query = graphql`
  query ($chapterNumber: String) {
    allPlantMetadataJson(filter: {chapterNumber: {eq: $chapterNumber}}) {
      nodes {
        id
        chapterNumber
        plants {
          commonName
          latinName
          imageName
          relativeImagePath {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`