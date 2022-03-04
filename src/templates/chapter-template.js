import React from "react"
import Layout from "../components/layout"
import Plants from "../components/plants"

export default function ChapterTemplate({ pageContext: { chapter } }) {
  return (
    <Layout>
        <Plants chapter={chapter} />
    </Layout>
  )
}