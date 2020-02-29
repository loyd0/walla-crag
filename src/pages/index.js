import React from "react"
import Layout from "@layouts"
import SEO from "@components/seo"
import { graphql } from "gatsby"
import sectionParser from '../functions/CMSParser'

const IndexPage = ({ data: { allContentfulPage: { nodes } } }) => {
  return (
    <Layout>
      <SEO title={nodes[0].metaTitle} />
      {nodes[0].sections.map(section => sectionParser(section))}
    </Layout>
  )
}


export const IndexQuery = graphql`
  query MyQuery {
    allContentfulPage(filter: {slug: {eq: "/"}}) {
      nodes {
        id
        metaTitle
        title
        sections {
          backgroundImage {
            file {
              url
            }
            fluid(maxWidth: 1200, quality: 95) {
              ...GatsbyContentfulFluid_withWebp
            }
            title
          }
          type
          name
          scrollToId
          parts {
            ... on ContentfulPanel {
              internal {
                type
              }
              backgroundImage {
                file {
                  url
                }
                fluid(maxWidth: 500) {
                  ...GatsbyContentfulFluid_withWebp
                }
                title
                description
              }
              linksTo
              title
            }
            ... on ContentfulContentCarousel {
              id
              title
              content {
                description {
                  description
                }
                title
              }
              internal {
                type
              }
            }
            ... on ContentfulContent {
              id
              title
              description {
                description
              }
              internal {
                type
              }
              callToAction {
                text
                type
                linkTo
              }
            }
            ... on ContentfulCarousel {
              id
              images {
                title
                fluid(maxWidth: 1200) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              title
              internal {
                type
              }
            }
            ... on ContentfulList {
              id
              internal {
                type
              }
              items {
                ... on ContentfulWalks {
                  id
                  icon {
                    title
                    file {
                      url
                    }
                    internal {
                      type
                    }
                  }
                  description
                  difficulty
                  time
                }
                ... on ContentfulFeature {
                  id
                  icon {
                    title
                    file {
                      url
                    }
                  }
                  internal {
                    type
                  }
                  text
                }
                ... on ContentfulActivity {
                  id
                  title
                  description
                  icon {
                    file {
                      url
                    }
                    title
                    internal {
                      type
                    }
                  }
                }
              }
              type
            }
          }
        }
      }
    }
  }

`

export default IndexPage
