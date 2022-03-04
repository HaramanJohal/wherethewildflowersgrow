import { graphql, useStaticQuery } from "gatsby"

import * as React from "react"
import Layout from "../components/layout"
import Plant from "../components/plant"

export default function PlantsPage() {
    // let plants = plantData["allFile"]["nodes"].map((node) => {
    //     let description = plantData["allChapter1Json"]["edges"].filter((edge) => edge["node"]["commonName"] == node["name"].replace("_", " "))[0]["node"]
    //     return (<Plant src={node["publicURL"]} commonName={description["commonName"]} latinName={description["latinName"]} />)
    // })
  return (
    <Layout>
      <title>Plants by Chapter</title>
      <h1>
        Plants by Chapter
      </h1>
      <h2>
        All photos copyright Leif Bersweden
      </h2>
      <p>
        A few image examples from chapter 1
      </p>
      {/* <Plants/> */}
      {/* {plants} */}
    </Layout>
  )
}
