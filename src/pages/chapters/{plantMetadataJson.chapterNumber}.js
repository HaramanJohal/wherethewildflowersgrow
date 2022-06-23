import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import ChapterHeader from "../../components/chapterHeader"
import Gallery from "../../components/gallery"
import Plant from "../../components/plant"

export default function Chapter({ data, pageContext }) {
  const images = data.allPlantMetadataJson.nodes[0].plants.map(
    plant => <Plant thumbnail={plant.relativeImagePath.childImageSharp.thumbnail} image={plant.relativeImagePath.childImageSharp.gatsbyImageData} commonName={plant.commonName} latinName={plant.latinName} copyrightName={plant.copyrightName} />
  )
  let chapterTitles = [
    "Botanising by Bike",
    "The New Year Plant Hunt",
    "The Timekeepers",
    "The Mountain Emperor of Pen-y-ghent",
    "Bluebells of the South Downs Way",
    "Sea Pinks and the Lizard",
    "The Downland Danger Zone",
    "Lakeland Rivers and The Buttercup Floodplain",
    "Botanising on the Moon",
    "The Shetland Mouse-ear",
    "The Ancient Pine Forests of Caledonia",
    "Poppies in the Cornfield",
    "The Bladderwort on the Broads",
    "The Cloud Flowers",
    "The Meadow Maker",
    "Beach Botany",
    "Fly Traps and Bog Sponges",
    "Autumn Leaves and Kentish Seaweeds",
    "The Mossy Rainforest of West Cork",
    "Something Worth Protecting"
  ]

  return(
    <Layout>
      <ChapterHeader chapterNumber={data.allPlantMetadataJson.nodes[0].chapterNumber} chapterName={chapterTitles[parseInt(data.allPlantMetadataJson.nodes[0].chapterNumber)-1]}/>
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
              gatsbyImageData(layout: FULL_WIDTH, transformOptions: {fit: CONTAIN, cropFocus: ENTROPY})
              thumbnail: gatsbyImageData(layout: FULL_WIDTH, transformOptions: {fit: COVER})
            }
          }
        }
      }
    }
  }
`