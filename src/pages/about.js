import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
      <Layout>
          <title>About the Book</title>
          <h1>
            About the Book
          </h1>
          <h2>
            Synopsis
          </h2>
          <StaticImage src="../data/cover.jpg" alt="The front cover of Where the wildflowers" />
          <p>Buy it here!</p>
          <h2>
            Bio
          </h2>
          <StaticImage src="../data/Leif.jpg" alt="The front cover of Where the wildflowers" />
      </Layout>
    )
  }

  export default AboutPage
