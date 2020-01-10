import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "@components/Section"
import { graphql } from "gatsby"

const IndexPage = ({data }) => (
  <Layout>
    <SEO title="Home" />
    <Section images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "landscape-lakes-min.jpg")
    }>
  { console.log(data)}
    </Section>
  </Layout>
)


export const IndexQuery = graphql`
  query MyQuery {
  allImageSharp {
    edges {
      node {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
            originalName
          }
      }
    }
  }
}

`

export default IndexPage
