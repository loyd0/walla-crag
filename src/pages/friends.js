import React from 'react'
import Layout from '@layouts'
import SEO from '@components/seo'
import sectionParser from '../functions/CMSParser'
import { graphql } from 'gatsby'


const friends = ({ data }) => {

  const { allContentfulPage: { nodes } } = data

  return (
    <Layout>
      <SEO title={ nodes[0].metaTitle} />
      { nodes[0].sections.map(section =>  sectionParser(section)) }
    </Layout>
  )
}


export const FriendsQuery = graphql`
query FriendsQuery {
    allContentfulPage(filter: {slug: {eq: "/friends"}}) {
        nodes {
          id
          metaTitle
          title
          sections {
            backgroundImage {
              file {
                url
              }
              fluid(maxWidth: 1600) {
                ...GatsbyContentfulFluid_withWebp
              }
              title
            }
            type
            name
            scrollToId
            parts {
              ... on ContentfulContent {
                id
                title
                callToAction {
                  text
                  type
                  linkTo
                }
                internal {
                  type
                }
                description {
                  description
                }
              }
            }
          }
        }
      }
  }
  
`


export default friends
