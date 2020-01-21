import React from 'react'
import Layout from '@components/layout'

import Section, { CarouselSection } from "@components/Sections"
import { Button } from '@elements'
import SEO from '../components/seo'

const match = (node, name) => node.fluid.originalName === name

const keswick = ({ data }) => {
  return (
    <Layout>
      <SEO title="Learn about Keswick" />
      <Section
        gradient
        images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "sunset.jpg")
        }>
        <div className="absolute w-full">
          <div className="z-10 text-center w-full px-8 max-w-2xl mx-auto">
            <h1 className="border-b-4 border-white inline-block font-bold w-full ">Keswick</h1>
            <h2 className="text-2xl md:text-4xl text-shadow-xl mt-4 md:mt-2 font-bold">The heart of the Lake District</h2>
          </div>
        </div>

      </Section>
      <CarouselSection
        header="The Town"
        description={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Photos of the town"]}
        images={data.allImageSharp.edges.filter(({ node }) => match(node, "keswick-1.jpg") || match(node, "keswick-2.jpg")  || match(node, "keswick-3.jpg"))}
      />
      <CarouselSection
        reverse={true}
        header="The Lake District"
        description={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Photos of the lakes"]}
        images={data.allImageSharp.edges.filter(({ node }) => match(node, "lakes-1.jpg") || match(node, "lakes-2.jpg") || match(node, "lakes-3.jpg")|| match(node, "lakes-4.jpg") || match(node, "lakes-5.jpg") )}
      />
    </Layout>
  )
}


export const keswickQuery = graphql`
  query keswickQuery {
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


export default keswick
