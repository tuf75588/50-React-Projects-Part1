import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import PhotoGrid from "../components/photo-grid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <PhotoGrid />
  </Layout>
)

export default IndexPage
