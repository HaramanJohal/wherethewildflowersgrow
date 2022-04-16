import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import ChapterHeader from "../../components/chapterHeader"
import Gallery from "../../components/gallery"
import Plant from "../../components/plant"

export default function Chapter({ data, pageContext }) {
  console.log(data)
  console.log(pageContext)
  const images = data.allPlantMetadataJson.nodes[0].plants.map(
    plant => <Plant relativeImagePath={plant.relativeImagePath} commonName={plant.commonName} latinName={plant.latinName} copyrightName={plant.copyrightName} />
  )
  return(
    <Layout>
      <ChapterHeader heading={`Chapter ${data.allPlantMetadataJson.nodes[0].chapterNumber}`}/>
      <p>Photographs © Leif Bersweden unless stated otherwise</p>
      <Gallery>
        {images}
      </Gallery>
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
          copyrightName
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