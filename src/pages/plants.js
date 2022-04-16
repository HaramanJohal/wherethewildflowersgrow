import { Link } from "gatsby"

import * as React from "react"
import Layout from "../components/layout"

export default function PlantsPage() {
  const chapters = [...Array(20).keys()].map(
    index => <Link to={`/chapters/${index + 1}`}>Chapter {index + 1}</Link>
  )

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
      {chapters}
    </Layout>
  )
}
