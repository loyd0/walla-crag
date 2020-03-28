import React from 'react'
import Layout from '@layouts'

import Section, { CarouselSection } from "@components/Sections"
import {  Card } from '@elements'
import { graphql } from 'gatsby'
import SEO from '@components/seo'
import sectionParser from '../functions/CMSParser'




const match = (node, name) => { 
  const regex = RegExp(name);
  return regex.test(node.fluid.originalName)
}

const walks = [
  {
    title: "Walla Crag",
    desc: "The name stake walk with stunning views.",
    icons: [
      "⛰⛰⛰",
      "🕰🕰"
    ]
  },
  {
    title: "Pub 2 Pub",
    desc: "Involving pubs at both ends.",
    icons: [
      "⛰",
      "🕰🕰🕰"
    ]
  },
  {
    title: "Helvellen",
    desc: "A classic hike for regular explorers.",
    icons: [
      "⛰⛰⛰⛰",
      "🕰🕰🕰🕰"
    ]
  },
  {
    title: "Scarfell Pike",
    desc: "The big one, the bucket list.",
    icons: [
      "⛰⛰⛰⛰⛰",
      "🕰🕰🕰🕰🕰"
    ]
  },
  {
    title: "Train Tracks",
    desc: "A great introductory walk.",
    icons: [
      "⛰",
      "🕰🕰🕰"
    ]
  },
  {
    title: "Lake Lapping",
    desc: "Stunning views, easy amble.",
    icons: [
      "⛰",
      "🕰🕰🕰"
    ]
  },

]

const keswick = ({ data }) => {

  const { allContentfulPage: { nodes } } = data

  return (
    <Layout>
      <SEO title={ nodes[0].metaTitle} />
      { nodes[0].sections.map(section =>  sectionParser(section)) }
{/* 

      <Section
      overlay={0.2}
        className="min-h-screen bg-blue-gradient text-secondary text-center flex flex-col justify-around py-12"
        images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "cairn.jpg")
        }

      >
        <h2 className="z-10 my-8 md:mb- 0" > Our Favourite Walks </h2>

        <div className=" z-10 flex flex-col justify-center py-6">
          <div className="flex flex-initial flex-wrap md:px-4 p-1 max-w-5xl mx-auto justify-center ">

            {
              walks.map(({ title, desc, icons }, index) => <Card
                key={desc + index}
                title={title}
                desc={desc}
                icons={icons}
                style={{maxWidth: '15rem'}}
                className="h-full p-1 md:p-2 "
              />)
            }
          </div>
        </div>

      </Section>

      <Section
      overlay={0.2}
        className="min-h-screen bg-blue-gradient text-secondary text-center flex flex-col justify-around py-12"
        images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "barrels-min.jpg")
        }

      >
        <h2 className="z-10 my-8 md:mb- 0" > Our favourite activities </h2>

        <div className=" z-10 flex flex-col justify-center py-6">
          <div className="flex flex-initial flex-wrap md:px-4 p-1 max-w-5xl mx-auto justify-center ">

            {
              activities.map(({ title, desc, icons }, index) => <Card
                light
                key={desc + index}
                title={title}
                desc={desc}
                icons={icons}
                style={{maxWidth: '15rem'}}
                className="h-full p-1 md:p-2 "
              />)
            }
          </div>
        </div>

      </Section> */}

    </Layout>
  )
}


export const keswickQuery = graphql`
query keswickQuery {
  allContentfulPage(filter: {slug: {eq: "/keswick"}}) {
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
          parts {
            ... on ContentfulContent {
              id
              title
              callToAction {
                text
                type
                linkTo
              }
              description {
                description
              }
              internal {
                type
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
              type
              items {
                ... on ContentfulWalks {
                  id
                  icon {
                    title
                    file {
                      url
                    }
                  }
                  description 
                  linkTo
                  title
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
                }
                ... on ContentfulActivity {
                  id
                  title
                  cost
                  distance
                  linkTo
                  description
                  icon {
                    file {
                      url
                    }
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
}

`


export default keswick
