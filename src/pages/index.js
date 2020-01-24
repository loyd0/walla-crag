import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import sectionParser from '../functions/CMSParser'


const features = [
  "1 King bed", "2 Single beds", "1 Sofa bed", "2 Bathrooms", "Roof terrace", "Wifi", "Very very quiet", "TV & Fire Stick", "Bluetooth speaker", "Fully equiped kitchen", "Private parking", "Central location"]
const IndexPage = ({ data: { allContentfulPage: { nodes } } }) => (
  <Layout>
    <SEO title={nodes[0].metaTitle} />
    { nodes[0].sections.map(section => sectionParser(section)) }




  
{/* 
    <Section 
    
    scrollToId="features"

    className="min-h-screen bg-blue-gradient text-secondary text-center flex flex-col justify-around">
      <h2 className="my-8 md:mb-0" > Features </h2>

      <div className="flex flex-col justify-center py-6 ">
        <div className="flex flex-wrap w-3/4 max-w-5xl mx-auto ">

          {
            features.map(feature => <Feature
              key={feature}
              textStyle={{ maxWidth: 127 }}
              className="w-1/2 sm:w-1/3 lg:w-1/6 mb-2 lg:mb-12 self-center " textClassName="text-center mx-auto"
              text={feature}
            />)
          }
        </div>
      </div>

    </Section>

    <Section
      scrollToId="availability"
      overlay={0.25}
      images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "lake-min.jpg")
      }>
      <div className=" z-10 text-center w-full px-4 py-6 max-w-3xl self-center mx-auto sm: py-12">
        <h2 className="inline-block font-bold ">Availability</h2>
        <p className="text-center">Interesting booking the flat for a week, or two? Going of a series of refreshing hikes over a long weekend perhaps?
        </p>
        <p className="text-center">Check out the current availability below.</p>

        <div className="flex mt-8 flex-col md:flex-row mb-4">
          <Availability />
        </div>
        <Button> See full availability and book</Button>
      </div>


    </Section>
    <Section
      overlay={0.15}
      >
        <Panes  
          panes={[
            {
              text: "Learn more about Keswick",
              img: data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "boats-min.jpg"),
              linkTo: '/location'
            },
            {
              text: "Friends of Walla Crag",
              img: data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "bar-min.jpg"),
              linkTo: '/friends'
            },
            {
              text: "Follow us for updates and news on Instagram @wallacrag",
              img: data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "christmas-min.jpg"),
              linkTo: '/location'
            },
          ]}
        />
    </Section> */}
  </Layout>
)


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
            fluid(maxWidth: 1600) {
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
