import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"

import {coverImage, leifImage, synopsis, bio, buyIt} from "./about.module.css"

const AboutPage = () => {
    return (
      <Layout>
        <title>About the Book</title>
        <div>
          <StaticImage className={coverImage} src="../data/cover.jpg" alt="The front cover of Where the wildflowers" />
          <div className={synopsis}>
            <span>
              <p style={{fontWeight: "bold"}}>‘When was the last time you stopped and noticed a wild plant?’</p>
              <p style={{fontWeight: "bold"}}>An intriguing and timely exploration of the importance of Britain and Ireland’s plant life.</p>
              <p>Leif Bersweden has always been fascinated by wild plants. From a young age, his afternoons were spent hunting for and cataloguing the plants in his local area. But it is a landscape that is fast disappearing. Climate change, habitat destruction and declining pollinator populations mean that the future for plant life looks bleaker than ever before. Many of us are also unable to identify, or even notice, the plants that grow around us.</p>
              <p>Now a botanist, Leif decides to go on a mission, to explore the plants that Britain and Ireland have to offer and to meet those who spend time searching for them. Over the course of a year, Leif goes on a journey around the UK and Ireland, highlighting the unique plants that grow there, their history and the threats that face them. His journey takes him from the Cornish coast to the pine forests of Scotland – even to the streets of London, proving that nature can be found in the most unexpected places. Along the way, Leif highlights the joy and positivity that can be found through understanding nature and why it is so desperately important to protect our wildflowers.</p>
              <a className={buyIt} href="https://uk.bookshop.org/books/where-the-wildflowers-grow-my-botanical-journey-through-britain-and-ireland/9781529349535">
                <p>Buy it from your local bookshop here!</p>
              </a>
            </span>
          </div>
        </div>
        <div style={{paddingTop: "100px"}}>
          <div className={bio}>
            <span>
              <p>Leif Bersweden is a writer, botanist and science communicator with a face-down, bottom-up approach to watching nature. He grew up in rural Wiltshire where he taught himself to identify the local wildlife, focusing on plants from a young age. More recently, Leif completed a genetics PhD at Kew Gardens and his first book, <i>The Orchid Hunter</i>, was published in 2017.</p>
            </span>
          </div>
          <StaticImage className={leifImage} src="../data/Leif.jpg" alt="The front cover of Where the wildflowers" />
        </div>
      </Layout>
    )
  }

  export default AboutPage
